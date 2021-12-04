import React from 'react';

import TreatyContentsType from '@/components/atomic/molecules/TreatyContentsType';
import TreatyContentsList from '@/components/atomic/molecules/TreatyContentsList';

import { Wrapper, RingWrapper } from './style';
import Icon from '@/components/atomic/atoms/Icon';

const tags = ['값싼', '호텔', '게하'];

const TreatyContents = () => {
  return (
    <Wrapper>
      <TreatyContentsType width="115px" height="55px">
        숙소
      </TreatyContentsType>
      <RingWrapper>
        <Icon icon="Ring" />
        <Icon icon="Ring" />
      </RingWrapper>
      <TreatyContentsList right="10px" />
    </Wrapper>
  );
};

export default TreatyContents;
