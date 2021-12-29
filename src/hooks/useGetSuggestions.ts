import useSWR from 'swr';

import fetcher from '@/lib/utils/fetcher';

const useGetSuggestions = (id: number | null) => {
  const { data, error, mutate } = useSWR(() => `/party/suggestions?id=${id}`, fetcher, {
    shouldRetryOnError: false,
  });
  console.log('mem: ', data);

  return {
    suggestionData: data !== undefined && data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetSuggestions;
