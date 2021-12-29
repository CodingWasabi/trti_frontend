import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import useGetMyInfo from '@/hooks/useGetMyInfo';
import useGetMyPartyList from '@/hooks/useGetMyParty';

import PlusButton from '@/components/atomic/atoms/PlusButton';

import TravelHistoryList from '@/components/atomic/organisms/TravelHistoryList';

import AppLayout from '@/components/common/AppLayout';

import { travelHistoryList } from '@/mock';

const MainPage = () => {
  const { myInfo, isLoading: isGetMyInfoLoading, error: myInfoError, mutate: myInfoMutate } = useGetMyInfo();
  const {
    myPartyList,
    isLoading: isGetMyPartyListLoading,
    error: myPartyListError,
    mutate: myPartyListMutate,
  } = useGetMyPartyList();

  console.log(myPartyList);

  // if (!myInfo) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <AppLayout>
      {myPartyList.parties?.length > 0 ? (
        <TravelHistoryList travelHistoryList={myPartyList.parties} />
      ) : (
        <a href={'/group/create'}>여행 생성하러 가기</a>
      )}
      <PlusButton />
    </AppLayout>
  );
};

export default MainPage;
