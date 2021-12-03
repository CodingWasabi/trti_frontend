import React, { ReactText } from 'react';

import LeftRadiusBox from '@/components/atomic/atoms/LeftRadiusBox';

import { Theme } from '@/theme/Theme';

import { Wrapper, Contents } from './style';

export interface ILeftRadiusContentsProps {
  width: string;
  height: string;
  radiusWidth?: string;
  radiusHeight?: string;
}

interface ILeftRadiusContentsComponentProps extends ILeftRadiusContentsProps {
  children: ReactText;
}

const LeftRadiusContents = ({
  width,
  height,
  radiusWidth,
  radiusHeight,
  children,
}: ILeftRadiusContentsComponentProps) => {
  return (
    <Wrapper>
      <LeftRadiusBox width={radiusWidth} height={radiusHeight} backgroundColor={Theme.M_1} />
      <Contents width={width} height={height}>
        {children}
      </Contents>
    </Wrapper>
  );
};

export default LeftRadiusContents;
