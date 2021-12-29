import useSWR from 'swr';

import fetcher from '@/lib/utils/fetcher';

const useGetPartyResult = (id: number | null) => {
  const { data, error, mutate } = useSWR(() => `/party/result?id=${id}`, fetcher, {
    shouldRetryOnError: false,
  });
  console.log('qfqwwqfwqwqf', data);

  return {
    partyResultList: data !== undefined && data.answers,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetPartyResult;
