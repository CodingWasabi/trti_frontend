import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';

import { Wrapper } from './style';

const CheckCircle = () => {
  return (
    <Wrapper>
      <Icon icon="Check" width={24} height={16} />
    </Wrapper>
  );
};

export default CheckCircle;
