import { modals } from '@mantine/modals';
import { useFetch } from '../../hooks/useFetch';
import { useMutation } from '../../hooks/useMutation';
import { useToast } from '../../hooks/useToast';
import userService from '../services/user.service';

export const useNominees = () => {
  return useFetch(['nominees'], userService.getNominees);
};

export const useUsers = () => {
  return useFetch(['users'], userService.getUsers);
};

export const useUpdateUser = () => {
  const toast = useToast();

  return useMutation(userService.updateUser, {
    queries: ['users'],
    onSuccess: () => {
      modals.closeAll();
    },
    onError: (err): any => {
      toast.e(err);
    },
  });
};

export const useDeleteUser = () => {
  const toast = useToast();

  return useMutation(userService.deleteUser, {
    queries: ['users'],
    onSuccess: () => {
      modals.closeAll();
    },
    onError: (err): any => {
      toast.e(err);
    },
  });
};
