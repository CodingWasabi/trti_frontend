import useSWR from 'swr';

import { getMyPartyList } from '@/lib/api/my';

const KEY = '/my/party';

const useGetMyPartyList = () => {
  const { data, error, mutate } = useSWR(KEY, getMyPartyList, {
    shouldRetryOnError: false,
  });

  return {
    myPartyList: data !== undefined && data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetMyPartyList;
