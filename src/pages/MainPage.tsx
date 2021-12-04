import React from 'react';

import AppLayout from '@/components/common/AppLayout';

import LeftRadiusBox from '@/components/atomic/atoms/LeftRadiusBox';

import TreatyContentsType from '@/components/atomic/molecules/TreatyContentsType';

import TreatyContentsList from '@/components/atomic/molecules/TreatyContentsList';
import TreatyContents from '@/components/atomic/organisms/TreatyContents';

const MainPage = () => {
  return (
    <AppLayout>
      MainPage
      <LeftRadiusBox width="17px" height="55px" backgroundColor="#FF7F8C" />
      <TreatyContentsType width="115px" height="55px">
        숙소
      </TreatyContentsType>
      <TreatyContentsList />
      <TreatyContents />
    </AppLayout>
  );
};

export default MainPage;
