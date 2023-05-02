import * as SecureStore from 'expo-secure-store';
import type { Storage } from './cacheTypes';

export const tokenCache: Storage = {
  saveToken: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  },
  getToken: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value;
  },
};

// SecureStore is not supported on the web
// https://github.com/expo/expo/issues/7744#issuecomment-611093485
