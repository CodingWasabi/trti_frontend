import React from 'react';
import { Link } from 'react-router-dom';

import { StyledUl } from './style';

interface ILeftNav {
  open: boolean;
}

const LeftNav = ({ open }: ILeftNav) => {
  return (
    <StyledUl open={open}>
      <Link to="/tendency">
        <li>여행성향</li>
      </Link>
      <Link to="/regions">
        <li>여행지</li>
      </Link>
      <Link to="/trips">
        <li>나의 여행</li>
      </Link>
      <Link to="/mypage">
        <li>개인설정</li>
      </Link>
    </StyledUl>
  );
};

export default LeftNav;
