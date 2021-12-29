import useSWR from 'swr';

import fetcher from '@/lib/utils/fetcher';

const useGetPartynfo = (id: number | null) => {
  const { data, error, mutate } = useSWR(() => `/party/info?id=${id}`, fetcher, {
    shouldRetryOnError: false,
  });

  return {
    partyInfo: data !== undefined && data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetPartynfo;
