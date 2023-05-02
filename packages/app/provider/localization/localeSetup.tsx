import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';
import ar from './locale/ar.json';

// Initialize i18n instance
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false, // For react
  },
  defaultNS: 'common',
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
});

export default i18n;
