import React, { ReactText } from 'react';

import LeftRadiusBox from '@/components/atomic/atoms/LeftRadiusBox';

import { Theme } from '@/theme/Theme';

import { Wrapper, Contents } from './style';

export interface ITreatyContentsTypeProps {
  width: string;
  height: string;
  radiusWidth?: string;
  radiusHeight?: string;
}

interface ITreatyContentsTypeComponentProps extends ITreatyContentsTypeProps {
  children: ReactText;
}

const TreatyContentsType = ({
  width,
  height,
  radiusWidth,
  radiusHeight,
  children,
}: ITreatyContentsTypeComponentProps) => {
  return (
    <Wrapper>
      <LeftRadiusBox width={radiusWidth} height={radiusHeight} backgroundColor={Theme.M_1} />
      <Contents width={width} height={height}>
        {children}
      </Contents>
    </Wrapper>
  );
};

export default TreatyContentsType;
