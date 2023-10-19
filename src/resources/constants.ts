export const DEFAULT_STORAGE = window.localStorage;
export const STORAGE_KEYS = {
  SETTINGS: 'saved_settings',
  USER_DATA: 'user_data',
};
export const DEFAULT_MESSAGES = {
  s: 'Successful',
  e: 'Something went wrong',
};
export const BASE_URL = import.meta.env.VITE_APP_SERVER_URI + '/api';
export const TOKEN_DATA = {
  HEADER_KEY: 'Authorization',
  TYPE: 'Bearer',
};
