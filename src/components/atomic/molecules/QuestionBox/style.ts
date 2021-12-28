import styled from 'styled-components';

import { IQuestionBoxProps } from '@/components/atomic/molecules/QuestionBox';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  width: 100%;
`;

export const IconWrapper = styled.div<{ clicked: boolean }>`
  visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};
  position: relative;
  top: 15px;
`;

export const QuestionBoxWrapper = styled.div<IQuestionBoxProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 140px;

  padding: 5px;

  word-break: keep-all;

  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => (props.clicked ? `4px solid ${Theme.M_1}` : `0.5px solid ${Theme.F_2}`)};
  border-radius: 38px;
`;
