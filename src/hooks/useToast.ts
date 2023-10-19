/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotificationProps } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';
import { DEFAULT_MESSAGES } from '../resources/constants';

function defaultSuccessNormalizer(success?: any) {
  return typeof success === 'string' ? success : DEFAULT_MESSAGES.s;
}
function defaultErrorNormalizer(error?: any) {
  if (typeof error === 'string') return error;

  if (error instanceof AxiosError) {
    const res =
      typeof error.response?.data.message === 'string'
        ? (error.response.data.message as string)
        : typeof error.response?.data === 'string'
        ? error.response.data
        : typeof error.response?.config?.data === 'string'
        ? error.response?.config.data
        : DEFAULT_MESSAGES.e;

    return res;
  }

  return DEFAULT_MESSAGES.e;
}

export const useToast = ({
  normalizeSuccess,
  normalizeError,
  successProps,
  errorProps,
}: {
  normalizeSuccess?: (success?: any) => string;
  normalizeError?: (error?: any) => string;
  successProps?: Omit<Partial<NotificationProps>, 'message'>;
  errorProps?: Omit<Partial<NotificationProps>, 'message'>;
} = {}) => {
  const sProps = successProps || { color: 'green' };
  const eProps = errorProps || { color: 'red' };

  const normalizeS = normalizeSuccess || defaultSuccessNormalizer;
  const normalizeE = normalizeError || defaultErrorNormalizer;

  return {
    s: (success: any) => {
      const message = normalizeS(success);

      notifications.show({
        message,
        ...sProps,
      });
    },
    e: (error: any) => {
      const message = normalizeE(error);

      notifications.show({
        message,
        ...eProps,
      });
    },
  };
};
