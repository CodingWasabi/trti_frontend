import client from '@/lib/api/client';

import { IParams, ITravelGroupProps } from '@/types/travelHistory';

// 인원 추가
export const addMember = (email: string) => client.post('/member', email).then((res) => res.data);

// 그룹 생성하기
export const makeGroup = ({ ...body }: ITravelGroupProps) => client.post('/group', body).then((res) => res.data);

// 그룹 정보
export const getGroupInfo = (id: IParams) => client.get('/group/info', { params: { id } }).then((res) => res.data);

// 그룹 멤버
export const getGroupMembers = (id: IParams) =>
  client.get('/group/members', { params: { id } }).then((res) => res.data);

// 그룹 결과
export const getGroupResult = (id: IParams) => client.get('/group/result', { params: { id } }).then((res) => res.data);

// 합의서 결과 받아오기
export const getTreaty = (id: IParams) => client.get('/group/treaty', { params: { id } }).then((res) => res.data);
