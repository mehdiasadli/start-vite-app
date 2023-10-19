import {
  DefaultError,
  MutationFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  useMutation as useMantineMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useToast } from './useToast';

export const useMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
>(
  fn: MutationFunction<TData, TVariables>,
  options: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext> & {
      hideErrorToast?: boolean;
      queries?: QueryKey;
    },
    'mutationFn'
  >
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const { e } = useToast();
  const queryClient = useQueryClient();

  return useMantineMutation<TData, TError, TVariables, TContext>({
    mutationFn: fn,
    ...options,

    onError: (err, variables, context) => {
      if (!options?.hideErrorToast) {
        e(err);
      }

      options?.onError?.(err, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      if (options?.queries?.length) {
        queryClient.refetchQueries({
          queryKey: options.queries,
        });
      }

      options?.onSettled?.(data, error, variables, context);
    },
  });
};
