import React from 'react';

import AppLayout from '@/components/common/AppLayout';

import LeftRadiusBox from '@/components/atomic/atoms/LeftRadiusBox';

import LeftRadiusContents from '@/components/atomic/molecules/LeftRadiusContents';

const MainPage = () => {
  return (
    <AppLayout>
      MainPage
      <LeftRadiusBox width="17px" height="55px" backgroundColor="#FF7F8C" />
      <LeftRadiusContents width="115px" height="55px">
        숙소
      </LeftRadiusContents>
    </AppLayout>
  );
};

export default MainPage;
