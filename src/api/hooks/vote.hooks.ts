import { useNavigate } from 'react-router-dom';
import { useMutation } from '../../hooks/useMutation';
import voteService from '../services/vote.service';
import { useToast } from '../../hooks/useToast';
import { NomineeData } from '../../types/api';
import { useFetch } from '../../hooks/useFetch';
import { useQueryClient } from '@tanstack/react-query';

export const useVote = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation(
    (data: { categoryId: string; nominees: NomineeData[] }) => voteService.vote(data),
    {
      onSuccess: () => {
        navigate('/categories');
        toast.s('Səsiniz qeydə alındı');
      },
    }
  );
};

export const useVotes = () => {
  return useFetch(['votes'], voteService.getVotes);
};

export const useData = () => {
  return useFetch(['data'], voteService.getData);
};

export const useDeleteVote = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation((id: string) => voteService.deleteVote(id), {
    onSuccess: () => {
      toast.s('Səs silindi');
      queryClient.refetchQueries({ queryKey: ['users', 'votes'] });
    },
  });
};
