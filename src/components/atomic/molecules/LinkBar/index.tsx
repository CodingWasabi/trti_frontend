import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';
import Text from '@/components/atomic/atoms/Text';

import { Wrapper } from './style';

interface ILinkBarProps {
  children: React.ReactText;
}

const LinkBar = ({ children }: ILinkBarProps) => {
  return (
    <Wrapper to="/groups">
      <Text fontColor="#1B1B1B" fontWeight="700" fontSize="18px">
        {children}
      </Text>
      <Icon icon="RightArrow" />
    </Wrapper>
  );
};

export default LinkBar;
