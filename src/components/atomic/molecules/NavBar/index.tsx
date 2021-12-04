import React from 'react';
import { useHistory } from 'react-router-dom';

import Text from '@/components/atomic/atoms/Text';

import { Theme } from '@/theme/Theme';

import { Wrapper, NavBarBlock } from './style';

const NavBar = () => {
  const history = useHistory();

  const onClickTendency = () => {
    console.log('coi');
    history.push('/tendency');
  };

  const onClickRegions = () => {
    history.push('/regions');
  };

  const onClickTrips = () => {
    history.push('/trips');
  };

  const onClickMypage = () => {
    history.push('/mypage');
  };

  return (
    <Wrapper>
      <NavBarBlock>
        <Text fontColor={Theme.F_4} fontSize="16px" fontWeight="500" cursor={true} onClick={onClickTendency}>
          여행성향
        </Text>
        <Text fontColor={Theme.F_4} fontSize="16px" fontWeight="500" cursor={true} onClick={onClickRegions}>
          여행지
        </Text>
        <Text fontColor={Theme.F_4} fontSize="16px" fontWeight="500" cursor={true} onClick={onClickTrips}>
          나의 여행
        </Text>
        <Text fontColor={Theme.F_4} fontSize="16px" fontWeight="500" cursor={true} onClick={onClickMypage}>
          개인설정
        </Text>
      </NavBarBlock>
    </Wrapper>
  );
};

export default NavBar;
