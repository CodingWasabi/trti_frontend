import React, { useState } from 'react';

import Text from '@/components/atomic/atoms/Text';

import QuestionBox from '@/components/atomic/molecules/QuestionBox';

import { Theme } from '@/theme/Theme';

import { Wrapper, StyledSlider, Row } from './style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IQuestionSelectionProps {
  questionList: Array<{ A: string; B: string }>;
}

const QuestionSelection = ({ questionList }: IQuestionSelectionProps) => {
  const [isClicked, setIsClicked] = useState({
    A: false,
    B: false,
  });

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledSlider {...settings}>
        {questionList.map((questionList) => {
          return (
            <Wrapper>
              <QuestionBox clicked={isClicked.A}>
                <Text
                  fontColor={isClicked.A ? `${Theme.F_2}` : `${Theme.F_4}`}
                  fontSize="20px"
                  fontWeight="500"
                  textAlign="center">
                  {questionList.A}
                </Text>
              </QuestionBox>
              <Row>
                <Text fontColor={Theme.F_4} fontSize="24px" fontWeight="500">
                  VS
                </Text>
              </Row>
              <QuestionBox clicked={isClicked.B}>
                <Text
                  fontColor={isClicked.B ? `${Theme.F_2}` : `${Theme.F_4}`}
                  fontSize="20px"
                  fontWeight="500"
                  textAlign="center">
                  {questionList.B}
                </Text>
              </QuestionBox>
            </Wrapper>
          );
        })}
      </StyledSlider>
    </div>
  );
};

export default QuestionSelection;
