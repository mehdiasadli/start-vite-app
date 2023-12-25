import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '../resources/constants';
import { ILoginResponse, IUserStore } from '../types/api';

type UseAuthState = {
  token: string | null;
  user: IUserStore | null;
};
type UseAuthActions = {
  login: (data: ILoginResponse) => void;
  logout: () => void;
};

const initialValue: UseAuthState = {
  token: null,
  user: null,
};

export const useAuth = create<UseAuthState & UseAuthActions>()(
  persist(
    (set) => ({
      ...initialValue,

      login: (data) =>
        set(() => ({
          token: data.token,
          user: { id: data.id, username: data.username, isAdmin: data.isAdmin },
        })),

      logout: () =>
        set(() => ({
          token: null,
          user: null,
        })),
    }),
    { name: STORAGE_KEYS.USER_DATA }
  )
);
