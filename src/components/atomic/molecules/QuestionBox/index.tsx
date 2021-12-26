import React from 'react';

import CheckCircle from '@/components/atomic/atoms/CheckCircle';

import { Wrapper, IconWrapper, QuestionBoxWrapper } from './style';

export interface IQuestionBoxProps {
  clicked: boolean;
}

interface IQuestionComponentProps extends IQuestionBoxProps {
  children: React.ReactNode;
}

const QuestionBox = ({ clicked, children }: IQuestionComponentProps) => {
  return (
    <Wrapper>
      {clicked && (
        <IconWrapper>
          <CheckCircle />
        </IconWrapper>
      )}
      <QuestionBoxWrapper clicked={clicked}>{children}</QuestionBoxWrapper>
    </Wrapper>
  );
};

export default QuestionBox;
