// Custom server entry point for cPanel Node.js App Selector / Passenger
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Detect where .next directory lives
function getNextDir() {
  const possible = [
    path.resolve(__dirname),
    path.join(__dirname, 'update_production'),
    path.join(__dirname, 'deploy_build'),
  ];
  for (const d of possible) {
    if (fs.existsSync(path.join(d, '.next', 'BUILD_ID'))) {
      return d;
    }
  }
  return path.resolve(__dirname);
}

const appDir = getNextDir();
const app = next({ dev, dir: appDir });
const handle = app.getRequestHandler();

const MIME_TYPES = {
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// Bulletproof static resolver: looks in standard paths, subfolders, and recursive fallback
const staticCache = new Map();

function resolveStaticFile(relativePath) {
  if (staticCache.has(relativePath)) {
    return staticCache.get(relativePath);
  }

  const filename = path.basename(relativePath);
  const candidates = [
    path.join(__dirname, '.next', 'static', relativePath),
    path.join(__dirname, 'public', '_next', 'static', relativePath),
    path.join(__dirname, 'update_production', '.next', 'static', relativePath),
    path.join(__dirname, 'update_production', 'public', '_next', 'static', relativePath),
    path.join(__dirname, 'deploy_build', '.next', 'static', relativePath),
    path.join(__dirname, 'next_build', '.next', 'static', relativePath),
    path.join(__dirname, '.next', '.next', 'static', relativePath),
  ];

  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      staticCache.set(relativePath, c);
      return c;
    }
  }

  // Recursive search anywhere in project for the file
  function search(dir, depth) {
    if (depth > 5) return null;
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isFile() && entry.name === filename) {
          return path.join(dir, entry.name);
        }
        if (entry.isDirectory() && entry.name !== 'node_modules' && !entry.name.startsWith('.git')) {
          const found = search(path.join(dir, entry.name), depth + 1);
          if (found) return found;
        }
      }
    } catch (e) {}
    return null;
  }

  const found = search(__dirname, 0);
  if (found) {
    staticCache.set(relativePath, found);
    return found;
  }

  return null;
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Diagnostic debug endpoint
    if (pathname === '/server-debug') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      try {
        const files = fs.readdirSync(__dirname);
        const nextPath = path.join(__dirname, '.next');
        const hasNext = fs.existsSync(nextPath);
        const staticPath = path.join(__dirname, '.next', 'static');
        const hasStatic = fs.existsSync(staticPath);
        res.end(JSON.stringify({
          status: 'ok',
          dirname: __dirname,
          files,
          hasNext,
          nextContents: hasNext ? fs.readdirSync(nextPath) : null,
          hasStatic,
          staticContents: hasStatic ? fs.readdirSync(staticPath) : null,
        }, null, 2));
      } catch (e) {
        res.end(JSON.stringify({ error: e.message }));
      }
      return;
    }

    // Bulletproof static asset serving for /_next/static/
    if (pathname && pathname.startsWith('/_next/static/')) {
      const subPath = pathname.replace('/_next/static/', '');
      const staticFile = resolveStaticFile(subPath);

      if (staticFile) {
        const ext = path.extname(staticFile).toLowerCase();
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        return fs.createReadStream(staticFile).pipe(res);
      }
    }

    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on port ${port}`);
  });
}).catch((err) => {
  console.error('Next.js failed to start:', err);
  process.exit(1);
});
