import React, { useState } from 'react';

export interface IProgressBarProps {
  percentage: number;
}

import { Wrapper, ProgressContents } from './style';

const ProgressBar = ({ percentage }: IProgressBarProps) => {
  return (
    <Wrapper>
      <ProgressContents percentage={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;
