import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';

import { Theme } from '@/theme/Theme';

import { Wrapper } from './style';

export interface ICheckCircleProps {
  color?: string;
  iconWidth?: number;
  iconHeight?: number;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const CheckCircle = ({
  color = 'white',
  width = '30px',
  height = '30px',
  iconWidth = 24,
  iconHeight = 16,
  backgroundColor = `${Theme.M_1}`,
}: ICheckCircleProps) => {
  return (
    <Wrapper color={color} width={width} height={height} backgroundColor={backgroundColor}>
      <Icon icon="Check" width={iconWidth} height={iconHeight} />
    </Wrapper>
  );
};

export default CheckCircle;
