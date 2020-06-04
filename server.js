/* eslint-disable */
const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
// We use NEXT_ENV instead of NODE_ENV here so that we can
// enable Next's prod mode while running locally.
const app = next({ dev: process.env.NEXT_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(function logger(req, res, next) {
    console.log(`logger: ${req.method} ${req.url}`);
    next();
  });
  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
