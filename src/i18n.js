const NextI18Next = require('next-i18next').default
const path = require('path')

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
    let language = 'en'
    if (typeof window !== 'undefined' ) {
      language = domainLocaleMap[window.location.hostname];
    } else {
      language = domainLocaleMap[req.hostname];
    }
    return language
  },
  cacheUserLanguage(req, res, language, options = {}) {
    //todo
  },
}

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: supportedLangs,
  localePath: path.resolve('./public/static/locales'),
  customDetectors: [domainDetector],
  detection: {
    order: ['domain']
  }
});
