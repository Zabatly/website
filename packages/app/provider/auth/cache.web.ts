import Cookies from 'js-cookie';
import type { Storage } from './cacheTypes';
console.log('LOADED WEB APP');

export const tokenCache: Storage = {
  getToken: async (key: string) => {
    return (await Cookies.get(key)) || null;
  },
  saveToken: async (key: string, value: string) => {
    Cookies.set(key, value);
  },
};
