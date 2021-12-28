import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';
import Text from '@/components/atomic/atoms/Text';

import { ITravelHistorySummary } from '@/types/travelHistory';

import { Theme } from '@/theme/Theme';

import { Wrapper, DescriptionBox, FlexWrapper, ParticipantsCountWrapper } from './style';

const typeCheck = (type: string) => {
  if (type === 'black') return true;
  return false;
};

const TravelHistorySummary = ({
  name,
  startDate,
  endDate,
  location,
  participantsCount,
  type = 'black',
}: ITravelHistorySummary) => {
  const isBlackType = typeCheck(type);

  return (
    <Wrapper>
      {isBlackType ? (
        <Text
          fontColor={isBlackType ? Theme.F_4 : Theme.F_1}
          fontSize={isBlackType ? '15px' : '20px'}
          fontWeight={isBlackType ? '500' : '700'}>
          {name}
        </Text>
      ) : (
        <FlexWrapper isBlackType={isBlackType}>
          <Text
            fontColor={isBlackType ? Theme.F_4 : Theme.F_1}
            fontSize={isBlackType ? '15px' : '20px'}
            fontWeight={isBlackType ? '500' : '700'}>
            {name}
          </Text>
        </FlexWrapper>
      )}

      <DescriptionBox>
        <Text
          fontColor={isBlackType ? Theme.F_3 : Theme.F_1}
          fontSize={isBlackType ? '11px' : '13px'}
          fontWeight={isBlackType ? '400' : '700'}>
          {startDate} - {endDate}
        </Text>
        <FlexWrapper isBlackType={isBlackType}>
          <Text
            fontColor={isBlackType ? Theme.F_3 : Theme.F_1}
            fontSize={isBlackType ? '11px' : '13px'}
            fontWeight="400">
            {location}
          </Text>
          <Text
            fontColor={isBlackType ? Theme.F_3 : Theme.F_1}
            fontSize={isBlackType ? '11px' : '13px'}
            fontWeight="400">
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
