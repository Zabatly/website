import 'react-i18next';
import en from '../apps/nextjs/public/locales/en/common.json';
import ar from '../apps/nextjs/public/locales/ar/common.json';

const resources = {
  en: {
    common: en,
    // tss
  },
  ar: {
    common: ar,
    // tss
  },
} as const;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof resources;
  }
}
