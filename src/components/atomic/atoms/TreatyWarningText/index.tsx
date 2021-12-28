import React from 'react';

import Text from '@/components/atomic/atoms/Text';

import { Theme } from '@/theme/Theme';

const TreatyWarningText = () => {
  return (
    <Text fontColor={Theme.C_1} fontSize="12px" fontWeight="700">
      * 합의가 필요해요
    </Text>
  );
};

export default TreatyWarningText;
