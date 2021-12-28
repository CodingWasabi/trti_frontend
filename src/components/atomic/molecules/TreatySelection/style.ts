import styled from 'styled-components';

import { ITreatySelectionProps } from '@/components/atomic/molecules/TreatySelection';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  width: 100%;
`;

export const Container = styled.div<ITreatySelectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30px;

  ${({ theme }) => theme.desktop && theme.tablet} {
    height: 36px;
  }

  background-color: ${(props) => (props.selected ? props.color : Theme.F_1)};
  border-radius: 19px;
`;

export const CheckCircleWrapper = styled.div<{ selected: boolean }>`
  visibility: ${(props) => (props.selected ? 'visible' : 'hidden')};
  position: relative;
  top: 7px;

  ${Theme.desktop || Theme.tablet} {
    top: 11px;
  }
`;
