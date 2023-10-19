import {
  DefaultError,
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

export const useFetch = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  key: TQueryKey,
  fn: QueryFunction<TQueryFnData, TQueryKey, never>,
  options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData, TError> => {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    retry: false,
    refetchOnWindowFocus: false,
    ...options,

    queryKey: key,
    queryFn: fn,
  });
};
