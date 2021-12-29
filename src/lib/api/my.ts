import client from '@/lib/api/client';

import { ISurveyProps, ISuggestionProps } from '@/types/survey';

// 비회원 trti 조사
export const annonymousSurvey = ({ answers }: ISurveyProps) =>
  client.post('/annonymous/survey', answers).then((res) => res.data);

// 비회원 trti 기반 추천
export const annonymousSuggest = ({ ...body }: ISuggestionProps) =>
  client.post('/annonoymous/suggestion', body).then((res) => res.data);

// 회원 trti 조사
export const survey = ({ answers }: ISurveyProps) => client.post('/survey', answers).then((res) => res.data);

// 회원 trti 조사 결과
export const getMyTrti = () => client.get('/my/result').then((res) => res.data);

// 회원 trti 기반 추천
export const getMySuggestion = () => client.get('/my/suggestions').then((res) => res.data);

// 그룹 정보 받아오기
export const getMyPartyList = () => client.get('/my/party').then((res) => res.data);

// 내 정보 받아오기
export const getMyInfo = () => client.get('/my/info').then((res) => res.data);
