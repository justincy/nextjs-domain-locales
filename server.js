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

function detectLocale(req, res, next) {
  const locale = domainLocaleMap[req.hostname] || DEFAULT_LOCALE;
  // Only handle original page requests; ignore _next requests
  if (req.url.indexOf("/_next") === -1 && req.url.indexOf("/__next") === -1) {
    console.log('original url:', req.url);
    console.log('middleware: locale:', locale);
    if (req.url.indexOf('?') !== -1) {
      req.url = `${req.url}&locale=${locale}`;
    } else {
      req.url = `${req.url}?locale=${locale}`;
    }
    console.log('final url:', req.url);
  }
  next();
}

(async () => {
  await app.prepare();
  const server = express();

  server.use(detectLocale);
  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
