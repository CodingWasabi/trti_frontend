import React from 'react';

import TravelHistoryImage from '@/components/atomic/molecules/TravelHistoryImage';
import TravelHistorySummary from '@/components/atomic/molecules/TravelHistorySummary';

import { ITravelHistory } from '@/types/travelHistory';

import { Wrapper } from './style';

const TravelHistory = ({ imageUrl, alt, title, period, location, participantsCount, isAgreed }: ITravelHistory) => {
  return (
    <Wrapper>
      <TravelHistoryImage imageUrl={imageUrl} alt={alt} isAgreed={isAgreed} />
      <TravelHistorySummary title={title} period={period} location={location} participantsCount={participantsCount} />
    </Wrapper>
  );
};

export default TravelHistory;
