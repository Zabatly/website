import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import EN from '../nextjs/public/locales/en/common.json';
import AR from '../nextjs/public/locales/ar/common.json';

const ns = ['common'];
const supportedLngs = ['en', 'ar'];

i18n.use(initReactI18next).init({
  //debug: true,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // because of expo rn
  interpolation: { escapeValue: false },
  supportedLngs,
  ns,
  defaultNS: 'common',
  resources: {
    en: {
      common: EN,
    },
    ar: { common: AR },
  },
});

export default i18n;
