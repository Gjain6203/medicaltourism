// Custom server entry point for cPanel Node.js App Selector / Passenger
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.resolve(__dirname) });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on port ${port}`);
  });
}).catch((err) => {
  console.error('Next.js failed to start:', err);
  process.exit(1);
});
