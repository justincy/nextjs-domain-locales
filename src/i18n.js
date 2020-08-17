const NextI18Next = require('next-i18next').default
const path = require('path')

const DEFAULT_LOCALE = 'en';
const supportedLangs = ['en', 'es'];
const domainLocaleMap = {
  localhost: "en",
  "nexttest.com": "en",
  "nexttest.es": "es",
  "nexttest.de": "de",
  "it.nexttest.international": "it",
  "ua.nexttest.international": "ua",
};

const domainDetector = {
  name: 'domain',
  lookup(req, res, options) {
    let locale = DEFAULT_LOCALE;
    if (typeof window !== 'undefined' ) {
      locale = domainLocaleMap[window.location.hostname];
    } else {
      const hostname = req.headers.host?.split(':')[0];
      locale = domainLocaleMap[hostname];
    }
    return locale;
  },
  cacheUserLanguage(req, res, locale, options = {}) {
    //todo
  },
}

module.exports = new NextI18Next({
  defaultLanguage: DEFAULT_LOCALE,
  otherLanguages: supportedLangs,
  localePath: path.resolve('./public/static/locales'),
  customDetectors: [domainDetector],
  detection: {
    order: ['domain']
  }
});
