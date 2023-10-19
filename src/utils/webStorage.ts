/* eslint-disable @typescript-eslint/no-explicit-any */
import { DEFAULT_STORAGE } from './../resources/constants';

export const webStorage = {
  get<T = any>(key: string, storage = DEFAULT_STORAGE): T | null {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  set(key: string, value: any, storage = DEFAULT_STORAGE): boolean {
    try {
      const item = JSON.stringify(value);
      storage.setItem(key, item);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
