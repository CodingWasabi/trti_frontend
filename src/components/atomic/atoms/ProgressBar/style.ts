import styled from 'styled-components';

import { IProgressBarProps } from '@/components/atomic/atoms/ProgressBar';

export const Wrapper = styled.div`
  width: 100%;

  max-width: 300px;
  height: 11px;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

  background-color: ${({ theme }) => theme.F_1};
  border-radius: 10px;
`;

export const ProgressContents = styled.div<IProgressBarProps>`
  width: ${(props) => props.percentage}%;
  height: 11px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.M_1};

  transition: all 0.5s;
`;
