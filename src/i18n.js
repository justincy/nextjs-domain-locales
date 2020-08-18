const NextI18Next = require('next-i18next').default;
const path = require('path');

const DEFAULT_LOCALE = 'en';
const supportedLangs = ['en', 'es', 'de', 'it', 'ua'];
const domainLocaleMap = {
  localhost: 'en',
  'nexttest.com': 'en',
  'nexttest.es': 'es',
  'nexttest.de': 'de',
  'it.nexttest.international': 'it',
  'ua.nexttest.international': 'ua',
};

// Create our custom language detector.
// https://github.com/i18next/i18next-http-middleware#adding-own-detection-functionality
const domainDetector = {
  // We use the name to refer to it later when we want to tell i18next when to use it.
  name: 'domain',
  lookup(req, res, options) {
    let locale = DEFAULT_LOCALE;
    // In the browser, get the hostname from window.location.
    if (typeof window !== 'undefined' ) {
      locale = domainLocaleMap[window.location.hostname];
    } 
    // On the server, get the hostname from the request headers.
    // We use the host header which is available on IncomingMessage.
    // https://nodejs.org/api/http.html#http_class_http_incomingmessage
    // But the host header may include the port so first we take that off, if it exists.
    else {
      const hostname = req.headers.host?.split(':')[0];
      locale = domainLocaleMap[hostname];
    }
    return locale;
  }
}

// Now we create the NextI8Next instance. See their docs
// for a full list of available options.
// https://github.com/isaachinman/next-i18next#options
module.exports = new NextI18Next({
  defaultLanguage: DEFAULT_LOCALE,
  otherLanguages: supportedLangs,
  localePath: path.resolve('./public/static/locales'),
  // Register our custom language detector
  customDetectors: [domainDetector],
  // Tell i18next to _only_ use our custom language detector.
  // https://github.com/i18next/i18next-http-middleware#detector-options
  detection: {
    order: ['domain']
  }
});
