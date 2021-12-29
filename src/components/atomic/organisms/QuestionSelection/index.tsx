import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import client from '@/lib/api/client';

import Text from '@/components/atomic/atoms/Text';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import QuestionBox from '@/components/atomic/molecules/QuestionBox';

import { Theme } from '@/theme/Theme';

import { IAnswerProps } from '@/types/survey';

import { QuestionSelectionWrapper, SliderWrapper, ContentsWrapper, Row } from './style';

interface IQuestionSelectionProps {
  questionList: Array<{ A: string; B: string }>;
  clickedCount: number;
  answers: Array<IAnswerProps>;
  setAnswers: React.Dispatch<React.SetStateAction<Array<IAnswerProps>>>;
  setClickedCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionSelection = ({
  questionList,
  clickedCount,
  answers,
  setAnswers,
  setClickedCount,
}: IQuestionSelectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClicked, setIsClicked] = useState({
    A: false,
    B: false,
  });
  const [backgroundColor, setBackgroundColor] = useState({
    A: `${Theme.F_1}`,
    B: `${Theme.F_1}`,
  });
  const slideRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const onClickQuestion = ({ questionList, type }: { questionList: { A: string; B: string }; type: string }) => {
    if (type === 'A') {
      let newAnswers = answers.filter((answer) => answer.id !== clickedCount);
      newAnswers = [...newAnswers, { id: clickedCount, answer: 0 }];

      setAnswers(newAnswers);

      setIsClicked({
        A: true,
        B: false,
      });

      setBackgroundColor({
        A: `${Theme.F_1}`,
        B: `${Theme.B_2}`,
      });
    }

    if (type === 'B') {
      let newAnswers = answers.filter((answer) => answer.id !== clickedCount);
      newAnswers = [...newAnswers, { id: clickedCount, answer: 1 }];

      setAnswers(newAnswers);

      setIsClicked({
        A: false,
        B: true,
      });

      setBackgroundColor({
        A: `${Theme.B_2}`,
        B: `${Theme.F_1}`,
      });
    }
  };

  const isQuestionClicked = () => {
    if (isClicked.A || isClicked.B) return true;
    return false;
  };

  const nextSlide = () => {
    if (isQuestionClicked() === false) return false;

    if (currentSlide + 1 !== questionList.length) {
      setCurrentSlide(currentSlide + 1);
    }
    setClickedCount((prev) => prev + 1);
    setIsClicked({
      A: false,
      B: false,
    });
    setBackgroundColor({
      A: `${Theme.F_1}`,
      B: `${Theme.F_1}`,
    });

    if (currentSlide + 1 === questionList.length) {
      onSubmitTRTI();
    }
  };

  const onSubmitTRTI = async () => {
    const res = await client.post('/survey', { answers });

    if (res.status === 200) {
      history.push('/');
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <QuestionSelectionWrapper>
        <SliderWrapper ref={slideRef}>
          {questionList.map((questionList, index) => (
            <ContentsWrapper key={index}>
              <QuestionBox
                clicked={isClicked.A}
                backgroundColor={backgroundColor.A}
                onClick={() => onClickQuestion({ questionList, type: 'A' })}>
                <Text
                  fontColor={isClicked.B ? `${Theme.F_2}` : `${Theme.F_4}`}
                  fontSize="20px"
                  fontWeight="500"
                  textAlign="center">
                  {questionList.A}
                </Text>
              </QuestionBox>
              <Row style={{ marginTop: '20px' }}>
                <Text fontColor={Theme.F_4} fontSize="24px" fontWeight="500">
                  VS
                </Text>
              </Row>
              <QuestionBox
                clicked={isClicked.B}
                backgroundColor={backgroundColor.B}
                onClick={() => onClickQuestion({ questionList, type: 'B' })}>
                <Text
                  fontColor={isClicked.A ? `${Theme.F_2}` : `${Theme.F_4}`}
                  fontSize="20px"
                  fontWeight="500"
                  textAlign="center">
                  {questionList.B}
                </Text>
              </QuestionBox>
            </ContentsWrapper>
          ))}
        </SliderWrapper>
      </QuestionSelectionWrapper>
      <LeftRadiusButton
        width="100%"
        backgroundColor={isQuestionClicked() ? Theme.M_1 : Theme.F_2}
        disabled={isQuestionClicked() ? false : true}
        onClick={nextSlide}>
        <Text fontColor={Theme.F_1} fontSize="18px" fontWeight="700">
          다음 질문으로 이동!
        </Text>
      </LeftRadiusButton>
    </>
  );
};

export default QuestionSelection;
