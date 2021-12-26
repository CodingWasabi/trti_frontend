import client from '@/lib/api/client';

import { IParams } from '@/types/travelHistory';

// 공지사항 리스트 받아오기
export const getNoticeList = () => client.get('/notice').then((res) => res.data);

// 공지사항 세부 내용 받아오기
export const getNoticeDetail = (id: IParams) => client.get('/notice', { params: { id } }).then((res) => res.data);
