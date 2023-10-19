import { useMutation } from '../../hooks/useMutation';
import authService from '../services/auth.service';

export const useSignin = () => {
  return useMutation(authService.signin, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
