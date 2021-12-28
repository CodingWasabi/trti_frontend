import React from 'react';

import TreatySelection from '@/components/atomic/molecules/TreatySelection';

import { Wrapper, Span } from './style';

export interface ITreatyVersusSelectionProps {
  color: string;
  isAgreed: boolean;
  selected: number;
}

const TreatyVersusSelection = ({ color, isAgreed, selected }: ITreatyVersusSelectionProps) => {
  return (
    <Wrapper color={color}>
      <TreatySelection color={color} selected={selected === 0}>
        저렴한!
      </TreatySelection>
      <Span isAgreed={isAgreed}>VS</Span>
      <TreatySelection color={color} selected={selected === 1}>
        고급진!
      </TreatySelection>
    </Wrapper>
  );
};

export default TreatyVersusSelection;
