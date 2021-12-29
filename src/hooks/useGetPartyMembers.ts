import useSWR from 'swr';

import fetcher from '@/lib/utils/fetcher';

const useGetPartyMembers = (id: number | null) => {
  const { data, error, mutate } = useSWR(() => `/party/members?id=${id}`, fetcher, {
    shouldRetryOnError: false,
  });

  return {
    memberInfo: data !== undefined && data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetPartyMembers;
