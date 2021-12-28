import React from 'react';

import Text from '@/components/atomic/atoms/Text';

import { Theme } from '@/theme/Theme';

import { Wrapper } from './style';

interface ISuggestionSummaryProps {
  name: string;
  location: string;
}

const SuggestionSummary = ({ name, location }: ISuggestionSummaryProps) => {
  return (
    <Wrapper>
      <Text fontColor={Theme.F_4} fontSize="15px" fontWeight="500">
        {name}
      </Text>
      <Text fontColor={Theme.F_4} fontSize="11px" fontWeight="500">
        {location}
      </Text>
    </Wrapper>
  );
};

export default SuggestionSummary;
