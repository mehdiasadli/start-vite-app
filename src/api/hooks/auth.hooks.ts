import { useNavigate } from 'react-router-dom';
import { useMutation } from '../../hooks/useMutation';
import { useAuth } from '../../store/auth.store';
import authService from '../services/auth.service';

export const useSignin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation(authService.signin, {
    onSuccess: (data) => {
      login({ token: data.token, id: data.id, username: data.username, isAdmin: data.isAdmin });
      navigate('/categories');
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return () => {
    logout();
    navigate('/');
  };
};
