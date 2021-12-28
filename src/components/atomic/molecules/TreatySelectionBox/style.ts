import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div<{ isAgreed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px 5px;

  min-width: 300px;
  width: 100%;

  background-color: ${(props) => (props.isAgreed ? Theme.F_1 : Theme.B_2)};

  // type props 받아서 처리
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  border-left: ${(props) => !props.isAgreed && `2px solid ${Theme.C_1}`};
`;

export const TitleWrapper = styled.h2`
  display: flex;
  & > span {
    margin-right: 5px;
  }
  margin-bottom: 20px;
`;
