import React from 'react';

import useGetResponsive from '@/hooks/useGetResponsive';

import CheckCircle from '@/components/atomic/atoms/CheckCircle';
import Text from '@/components/atomic/atoms/Text';

import { Theme } from '@/theme/Theme';

import { Wrapper, Container, CheckCircleWrapper } from './style';

export interface ITreatySelectionProps {
  color: string;
  selected: boolean;
}

interface ITreatySelectionComponentProps extends ITreatySelectionProps {
  children: React.ReactText;
}

const TreatySelection = ({ color, selected, children }: ITreatySelectionComponentProps) => {
  const isTablet = useGetResponsive() > 600;
  return (
    <Wrapper>
      <CheckCircleWrapper selected={selected}>
        <CheckCircle
          color={color}
          width={isTablet ? '25px' : '19px'}
          height={isTablet ? '25px' : '19px'}
          iconWidth={isTablet ? 14 : 8}
          iconHeight={isTablet ? 12 : 6}
          backgroundColor="white"
        />
      </CheckCircleWrapper>
      <Container selected={selected} color={color}>
        <Text fontColor={selected ? Theme.F_4 : Theme.F_2} fontSize="12px" fontWeight="900">
          {children}
        </Text>
      </Container>
    </Wrapper>
  );
};

export default TreatySelection;
