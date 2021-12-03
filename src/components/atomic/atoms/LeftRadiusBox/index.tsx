import React from 'react';

import { LeftRadiusBoxContents } from './style';

export interface ILeftRadiusBoxProps {
  width?: string;
  height?: string;
  backgroundColor: string;
}

const LeftRadiusBox = ({ width = '17px', height = '55px', backgroundColor }: ILeftRadiusBoxProps) => {
  return <LeftRadiusBoxContents width={width} height={height} backgroundColor={backgroundColor} />;
};

export default LeftRadiusBox;
