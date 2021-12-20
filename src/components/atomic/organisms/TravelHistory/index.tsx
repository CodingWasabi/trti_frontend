import React from 'react';

import TravelHistoryImage from '@/components/atomic/molecules/TravelHistoryImage';
import TravelHistorySummary from '@/components/atomic/molecules/TravelHistorySummary';

import { Wrapper } from './style';

import { ITravelHistorySummary } from '@/components/atomic/molecules/TravelHistorySummary';

interface ITravelHistory {
  src: string;
  alt: string;
}

const TravelHistory = ({
  src,
  alt,
  title,
  travelPeriod,
  location,
  participantsCount,
}: ITravelHistory & ITravelHistorySummary) => {
  return (
    <Wrapper>
      <TravelHistoryImage src={src} alt={alt} />
      <TravelHistorySummary
        title={title}
        travelPeriod={travelPeriod}
        location={location}
        participantsCount={participantsCount}
      />
    </Wrapper>
  );
};

export default TravelHistory;
