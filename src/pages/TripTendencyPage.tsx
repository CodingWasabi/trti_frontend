import React, { useEffect, useState } from 'react';

import ProgressBar from '@/components/atomic/atoms/ProgressBar';

import QuestionSelection from '@/components/atomic/organisms/QuestionSelection';

import AppLayout from '@/components/common/AppLayout';

import { IAnswerProps } from '@/types/survey';

import { questionList } from '@/mock';

const TripTendencyPage = () => {
  const [answers, setAnswers] = useState<Array<IAnswerProps>>([]);
  const [clickedCount, setClickedCount] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    setPercentage((clickedCount / questionList.length) * 100);
  }, [clickedCount]);

  return (
    <AppLayout isBlurred={true}>
      <ProgressBar percentage={percentage} />
      <QuestionSelection
        questionList={questionList}
        clickedCount={clickedCount}
        answers={answers}
        setClickedCount={setClickedCount}
        setAnswers={setAnswers}
      />
    </AppLayout>
  );
};

export default TripTendencyPage;
