import React from 'react';

import Image from '@/components/atomic/atoms/Image';

import TravelHistorySummary from '@/components/atomic/molecules/TravelHistorySummary';

import { Wrapper, ContentsWrapper } from './style';

interface IGroupResultInfoProps {
  party: {
    id: number;
    title: string;
    location: string;
    participantsCount: number;
    imageUrl: string;
    isAgreed: boolean;
    period: Array<string>;
  };
}

const GroupResultInfo = ({ party }: IGroupResultInfoProps) => {
  return (
    <Wrapper>
      <Image objectFit="cover" src={party.imageUrl} maxWidth="500px" width="100%" height="200px" />
      <ContentsWrapper>
        <TravelHistorySummary
          title={party.title}
          period={party.period}
          location={party.location}
          participantsCount={party.participantsCount}
          type="white"
        />
      </ContentsWrapper>
    </Wrapper>
  );
};

export default GroupResultInfo;
