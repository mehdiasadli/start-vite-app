import { useMutation } from '../../hooks/useMutation';
import controlService from '../services/control.service';

export const useUpdateControl = () => {
  return useMutation(controlService.update, {
    onSuccess: () => {},
  });
};
