import React from 'react';

import Text from '@/components/atomic/atoms/Text';

import { Wrapper } from './style';

export interface IAgreementStatus {
  isAgreed: boolean;
}

const AgreementStatus = ({ isAgreed }: IAgreementStatus) => {
  return (
    <Wrapper isAgreed={isAgreed}>
      <Text fontColor="#FFFFFF" fontSize="9px" fontWeight="500" cursor={false}>
        {isAgreed ? '합의완료' : '합의중'}
      </Text>
    </Wrapper>
  );
};

export default AgreementStatus;
