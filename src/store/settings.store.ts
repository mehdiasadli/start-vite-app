import { ColorScheme } from '@mantine/core';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '../resources/constants';

type UseSettingsState = {
  colorScheme: ColorScheme;
};
type UseSettingsActions = {
  toggle: () => void;
};

const initialValue: UseSettingsState = {
  colorScheme: 'light',
};

export const useSettings = create<UseSettingsState & UseSettingsActions>()(
  persist(
    (set) => ({
      ...initialValue,

      toggle: () =>
        set((state) => ({ colorScheme: state.colorScheme === 'light' ? 'dark' : 'light' })),
    }),
    { name: STORAGE_KEYS.SETTINGS }
  )
);
