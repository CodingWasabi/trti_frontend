import React from 'react';
import styled from 'styled-components';

import * as icons from '@/components/atomic/atoms/Icon/icons';

const IconWrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  svg {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;

export type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
  width?: number;
  height?: number;
}

const Icon = ({ icon, width, height }: IIconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper width={width || 24} height={height || 24}>
      <IconComponent />
    </IconWrapper>
  );
};

export default Icon;
