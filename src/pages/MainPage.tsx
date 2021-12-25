import React from 'react';

import PlusButton from '@/components/atomic/atoms/PlusButton';

import TravelHistoryList from '@/components/atomic/organisms/TravelHistoryList';

import AppLayout from '@/components/common/AppLayout';

import { travelHistoryList } from '@/mock';

const MainPage = () => {
  return (
    <AppLayout>
      <TravelHistoryList travelHistoryList={travelHistoryList} />
      <PlusButton />
    </AppLayout>
  );
};

export default MainPage;
