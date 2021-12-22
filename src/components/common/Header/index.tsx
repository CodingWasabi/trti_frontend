import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@/components/atomic/atoms/Icon';

import Burger from '@/components/common/Header/Burger';

import { Wrapper, HeaderBlock, Right, Login } from '@/components/common/Header/style';

const Header = () => {
  return (
    <Wrapper>
      <HeaderBlock>
        <Burger />
        <a href="/">
          <Icon icon="Logo" width={100} height={20} />
        </a>
        <Right>
          <Icon icon="Alarm" />
          <Link to="/mypage">
            <Icon icon="User" />
          </Link>
        </Right>
      </HeaderBlock>
    </Wrapper>
  );
};

export default Header;
