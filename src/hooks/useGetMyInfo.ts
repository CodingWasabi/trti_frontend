import useSWR from 'swr';

import { getMyInfo } from '@/lib/api/my';

export const KEY = '/my/info';

const useGetMyInfo = () => {
  const { data, error, mutate } = useSWR(KEY, getMyInfo, {
    shouldRetryOnError: false,
  });

  return {
    myInfo: data !== undefined && data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useGetMyInfo;
