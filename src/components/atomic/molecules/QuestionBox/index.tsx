import React from 'react';

import CheckCircle from '@/components/atomic/atoms/CheckCircle';

import { Wrapper, IconWrapper, QuestionBoxWrapper } from './style';

export interface IQuestionBoxProps {
  clicked: boolean;
  backgroundColor: string;
  onClick: () => void;
}

interface IQuestionComponentProps extends IQuestionBoxProps {
  children: React.ReactNode;
}

const QuestionBox = ({ clicked, backgroundColor, onClick, children }: IQuestionComponentProps) => {
  return (
    <Wrapper>
      <IconWrapper clicked={clicked}>
        <CheckCircle />
      </IconWrapper>

      <QuestionBoxWrapper clicked={clicked} backgroundColor={backgroundColor} onClick={onClick}>
        {children}
      </QuestionBoxWrapper>
    </Wrapper>
  );
};

export default QuestionBox;
