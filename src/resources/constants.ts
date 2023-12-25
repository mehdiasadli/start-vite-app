export const DEFAULT_STORAGE = window.localStorage;
export const STORAGE_KEYS = {
  USER_DATA: 'user_data',
};
export const DEFAULT_MESSAGES = {
  s: 'Proses uğurla başa çatdı',
  e: 'Bilinməyən xəta baş verdi',
};
export const BASE_URL = import.meta.env.VITE_APP_SERVER_URI + '/api';
export const TOKEN_DATA = {
  HEADER_KEY: 'Authorization',
  TYPE: 'Bearer',
};
