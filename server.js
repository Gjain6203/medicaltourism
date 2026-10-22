// Custom server entry point for cPanel Node.js App Selector / Passenger
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.resolve(__dirname) });
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

// Possible locations where .next/static might have been extracted on cPanel
function resolveStaticFile(relativePath) {
  const possibleRoots = [
    path.join(__dirname, '.next', 'static'),
    path.join(__dirname, '.next', '.next', 'static'),
    path.join(__dirname, 'next_build', '.next', 'static'),
    path.join(__dirname, 'public', '_next', 'static'),
  ];

  for (const root of possibleRoots) {
    const candidate = path.join(root, relativePath);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

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
