import React from 'react';

import TreatySelection from '@/components/atomic/molecules/TreatySelection';

import { Wrapper, Span } from './style';

export interface ITreatyVersusSelectionProps {
  color: string;
  isAgreed: boolean;
  selected: number;
  count0: string;
  count1: string;
}

const TreatyVersusSelection = ({ color, isAgreed, selected, count0, count1 }: ITreatyVersusSelectionProps) => {
  return (
    <Wrapper color={color}>
      <TreatySelection color={color} selected={selected === 0}>
        {count0}
      </TreatySelection>
      <Span isAgreed={isAgreed}>VS</Span>
      <TreatySelection color={color} selected={selected === 1}>
        {count1}
      </TreatySelection>
    </Wrapper>
  );
};

export default TreatyVersusSelection;
