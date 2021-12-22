import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 27px;

  height: 50px;

  border-top: 1px solid ${({ theme }) => theme.F_1};
  border-bottom: 1px solid ${({ theme }) => theme.F_1};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const NavBarBlock = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;

  padding: 0px 15px;

  width: 100%;
  min-width: 320px;

  ${({ theme }) => theme.desktop} {
    max-width: 750px;
  }
`;

export const StyledLi = styled.li`
  color: ${({ theme }) => theme.F_4};
  font-size: 16px;
  font-weight: 500;
`;
