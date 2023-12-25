/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { BASE_URL, STORAGE_KEYS, TOKEN_DATA } from '../resources/constants';
import { webStorage } from '../utils/webStorage';

abstract class Api {
  constructor(public readonly url: string, protected instance: AxiosInstance) {}

  protected async get<T>(path: string, config?: AxiosRequestConfig) {
    return await this.instance.get<T>(path, config).then((response) => response.data);
  }
  protected async post<T>(path: string, data?: any, config?: AxiosRequestConfig) {
    return await this.instance.post<T>(path, data, config).then((response) => response.data);
  }
  protected async put<T>(path: string, data?: any, config?: AxiosRequestConfig) {
    return await this.instance.put<T>(path, data, config).then((response) => response.data);
  }
  protected async delete<T>(path: string, config?: AxiosRequestConfig) {
    return await this.instance.delete<T>(path, config).then((response) => response.data);
  }
}

export class PublicApi extends Api {
  constructor(url: string, headers?: Omit<AxiosHeaders, 'baseURL'>) {
    const instance = axios.create({
      baseURL: BASE_URL + url,
      ...headers,
    });

    super(url, instance);
  }
}

function interceptor(
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
  const storage = webStorage.get<{ state: { token: string } }>(STORAGE_KEYS.USER_DATA);
  const token = storage?.state?.token || null;

  if (!token) return config;

  config.headers[TOKEN_DATA.HEADER_KEY] = TOKEN_DATA.TYPE + ' ' + token;
  return config;
}

export class PrivateApi extends Api {
  constructor(url: string, headers?: Omit<AxiosHeaders, 'baseURL'>) {
    const instance = axios.create({
      baseURL: BASE_URL + url,
      ...headers,
    });

    instance.interceptors.request.use(interceptor);

    super(url, instance);
  }
}
