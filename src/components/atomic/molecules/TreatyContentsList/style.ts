import styled from 'styled-components';

import { ITreatyContentListProps } from '@/components/atomic/molecules/TreatyContentsList';

export const Wrapper = styled.div<ITreatyContentListProps>`
  position: relative;
  right: ${(props) => props.right};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0px 10px;

  width: 100%;
  min-width: 150px;
  min-height: 55px;

  ${({ theme }) => theme.desktop} {
    max-width: 654px;
  }

  background-color: ${({ theme }) => theme.F_1};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
