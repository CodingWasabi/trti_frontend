import styled from 'styled-components';

import { IQuestionBoxProps } from '@/components/atomic/molecules/QuestionBox';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: relative;
  top: 15px;
`;

export const QuestionBoxWrapper = styled.div<IQuestionBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 140px;

  padding: 5px;

  word-break: keep-all;

  background-color: ${(props) => (props.clicked ? Theme.B_2 : Theme.B_1)};
  border: ${(props) => (props.clicked ? `4px solid ${Theme.M_1}` : `0.5px solid ${Theme.F_2}`)};
  border-radius: 38px;
`;
