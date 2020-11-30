import NextI18Next from 'next-i18next';
import path from 'path';

const NextI18NextInstance = new NextI18Next({
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  ns: ['error', 'footer', 'intro', 'utils', 'pages-names'],
  defaultLanguage: 'en',
  otherLanguages: ['ar'],
  defaultNS: 'intro',
  fallbackLng: 'en',
  localePath: path.resolve('./public/static/locales'),
});

export const { appWithTranslation, useTranslation, withTranslation, Link, i18n } = NextI18NextInstance;
export default NextI18NextInstance;
