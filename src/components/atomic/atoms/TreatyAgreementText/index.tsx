import React from 'react';

import Text from '@/components/atomic/atoms/Text';
import CheckCircle from '@/components/atomic/atoms/CheckCircle';

import { Theme } from '@/theme/Theme';

import { Wrapper, FlexWrapper } from './style';

interface ITreatyAgreementTextProps {
  isAgreed: boolean;
}

const TreatyAgreementText = ({ isAgreed }: ITreatyAgreementTextProps) => {
  return (
    <Wrapper style={{ marginBottom: '10px' }} isAgreed={isAgreed}>
      <Text fontColor={Theme.F_4} fontSize="12px" fontWeight="400">
        합의 상태:
      </Text>
      <FlexWrapper style={{ marginLeft: '8px' }}>
        <Text fontColor={Theme.M_4} fontSize="12px" fontWeight="700">
          합의 완료!
        </Text>
        <CheckCircle width="15px" height="15px" iconWidth={7} iconHeight={5} backgroundColor={Theme.M_4} />
      </FlexWrapper>
    </Wrapper>
  );
};

export default TreatyAgreementText;
