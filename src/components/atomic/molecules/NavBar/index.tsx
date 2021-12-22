import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, NavBarBlock, StyledLi } from './style';

const NavBar = () => {
  return (
    <Wrapper>
      <NavBarBlock>
        <Link to="/tendency">
          <StyledLi>여행성향</StyledLi>
        </Link>
        <Link to="/regions">
          <StyledLi>여행지</StyledLi>
        </Link>
        <Link to="/trips">
          <StyledLi>나의 여행</StyledLi>
        </Link>
        <Link to="/mypage">
          <StyledLi>개인설정</StyledLi>
        </Link>
      </NavBarBlock>
    </Wrapper>
  );
};

export default NavBar;
