import React from 'react';

import Icon from '@/components/atomic/atoms/Icon';
import { Wrapper, HeaderBlock, Right, Login } from '@/components/common/Header/style';

const Header = () => {
  return (
    <Wrapper>
      <HeaderBlock>
        <a href="/">
          <Icon icon="Logo" />
        </a>
        <Right>
          <Login>
            <a href="/login">로그인</a>
          </Login>
          <Icon icon="ProfileIcon" />
        </Right>
      </HeaderBlock>
    </Wrapper>
  );
};

export default Header;
