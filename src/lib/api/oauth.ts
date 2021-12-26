import client from '@/lib/api/client';

import { IProfileObjProps } from '@/types/oauth';

// 카카오 로그인
export const kakaoLogin = ({ ...profileObj }: IProfileObjProps) =>
  client.post('/oauth/kakao', profileObj).then((res) => res.data);
