import React from 'react';

import TravelHistoryImage from '@/components/atomic/molecules/TravelHistoryImage';
import TravelHistorySummary from '@/components/atomic/molecules/TravelHistorySummary';

import { ITravelHistory } from '@/types/travelHistory';

import { Wrapper } from './style';

const TravelHistory = ({ src, alt, title, startDate, endDate, location, participantsCount }: ITravelHistory) => {
  return (
    <Wrapper>
      <TravelHistoryImage src={src} alt={alt} />
      <TravelHistorySummary
        title={title}
        startDate={startDate}
        endDate={endDate}
        location={location}
        participantsCount={participantsCount}
      />
    </Wrapper>
  );
};

export default TravelHistory;
