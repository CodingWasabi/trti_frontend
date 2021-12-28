import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 99.9%;
  min-width: 260px;
  height: 33.5px;

  ${({ theme }) => theme.desktop && theme.tablet} {
    height: 39.5px;
  }

  background-color: ${Theme.F_1};
  border-radius: 19px;
  border: 2px solid ${(props) => props.color};

  & > div {
    position: relative;
    top: -9.5px;

    ${({ theme }) => theme.desktop && theme.tablet} {
      top: -12.5px;
    }
  }
`;

export const Span = styled.span<{ isAgreed: boolean }>`
  visibility: ${(props) => (props.isAgreed ? 'hidden' : 'visible')};

  color: ${Theme.C_1};
  font-size: 12px;
  font-weight: 400;
`;
