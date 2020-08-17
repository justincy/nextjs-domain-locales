const NextI18Next = require('next-i18next').default
const path = require('path')

const supportedLangs = ['en', 'es'];

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: supportedLangs,
  localePath: path.resolve('./public/static/locales'),
  serverLanguageDetection: false,
  browserLanguageDetection: false
});

// module.exports = function iniI18N(locale) {
//   return new NextI18Next({
//     defaultLanguage: locale,
//     otherLanguages: supportedLangs,
//     localePath: path.resolve('./public/static/locales'),
//     serverLanguageDetection: false,
//     browserLanguageDetection: false
//   });
// };
