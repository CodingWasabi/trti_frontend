import React from 'react';

import QuestionSelection from '@/components/atomic/organisms/QuestionSelection';

import AppLayout from '@/components/common/AppLayout';

import { questionList } from '@/mock';

const TripTendencyPage = () => {
  return (
    <AppLayout>
      <QuestionSelection questionList={questionList} />
    </AppLayout>
  );
};

export default TripTendencyPage;
