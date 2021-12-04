import styled from 'styled-components';

import { ITreatyContentsTypeProps } from '@/components/atomic/molecules/TreatyContentsType';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 117px;
`;

export const Contents = styled.div<ITreatyContentsTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${({ theme }) => theme.F_1};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.F_4};
`;
