import React from 'react';

import Text from '@/components/atomic/atoms/Text';
import TreatyWarningText from '@/components/atomic/atoms/TreatyWarningText';

import TreatyVersusSelection from '@/components/atomic/molecules/TreatyVersusSelection';

import { Wrapper, TitleWrapper } from './style';

export interface ITreatySelectionBoxProps {
  title: string;
  isAgreed: boolean;
  color: string;
  count0: number;
  count1: number;
  selected: number;
}

const TreatySelectionBox = ({ title, isAgreed, color, count0, count1, selected }: ITreatySelectionBoxProps) => {
  return (
    <Wrapper isAgreed={isAgreed}>
      <TitleWrapper>
        <Text fontColor="#000000" fontSize="12px" fontWeight="400">
          {title}
        </Text>
        {isAgreed === false && <TreatyWarningText />}
      </TitleWrapper>
      <TreatyVersusSelection color={color} isAgreed={isAgreed} selected={selected} />
    </Wrapper>
  );
};

export default TreatySelectionBox;
