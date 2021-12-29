import client from '@/lib/api/client';

const fetcher = (url: string) => client.get(url).then((res) => res.data);

export default fetcher;
