/* eslint-disable */
const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
// We use NEXT_ENV instead of NODE_ENV here so that we can
// enable Next's prod mode while running locally.
const app = next({ dev: process.env.NEXT_ENV !== "production" });
const handle = app.getRequestHandler();

const DEFAULT_LOCALE = "en";
const domainLocaleMap = {
  localhost: "en",
  "nexttest.com": "en",
  "nexttest.es": "es",
  "nexttest.de": "de",
  "it.nexttest.international": "it",
  "ua.nexttest.international": "ua",
};

function localeRewrite(req, res, next) {
  const locale = domainLocaleMap[req.hostname] || DEFAULT_LOCALE;
  const originalUrl = req.url;
  // Only handle original page requests; ignore _next requests
  if (req.url.indexOf("/_next") === -1 && req.url.indexOf("/__next") === -1) {
    req.url = `/${locale}${req.url}`;
  }
  if (originalUrl !== req.url) {
    console.log(`logger: ${req.method} ${req.hostname}${originalUrl}`);
    console.log(`rewrite: ${req.method} ${req.hostname}${req.url}`);
  }
  next();
}

(async () => {
  await app.prepare();
  const server = express();

  server.use(localeRewrite);
  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
