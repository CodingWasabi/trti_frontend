import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';
import Text from '@/components/atomic/atoms/Text';

import { Wrapper, DescriptionBox, FlexWrapper, ParticipantsCountWrapper } from './style';

export interface ITravelHistorySummary {
  title: string;
  travelPeriod: string;
  location: string;
  participantsCount: number;
}

const TravelHistorySummary = ({ title, travelPeriod, location, participantsCount }: ITravelHistorySummary) => {
  return (
    <Wrapper>
      <Text fontColor="#1B1B1B" fontSize="15px" fontWeight="500">
        {title}
      </Text>
      <DescriptionBox>
        <Text fontColor="#707070" fontSize="11px" fontWeight="400">
          {travelPeriod}
        </Text>
        <FlexWrapper>
          <Text fontColor="#707070" fontSize="11px" fontWeight="400">
            {location}
          </Text>
          <Text fontColor="#707070" fontSize="11px" fontWeight="400">
            <ParticipantsCountWrapper>
              <Icon icon="People" />
              {participantsCount}명
            </ParticipantsCountWrapper>
          </Text>
        </FlexWrapper>
      </DescriptionBox>
    </Wrapper>
  );
};

export default TravelHistorySummary;
