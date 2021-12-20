import React from 'react';

import Image from '@/components/atomic/atoms/Image';
import AgreementStatus from '@/components/atomic/atoms/AgreementStatus';

import { Wrapper, PositionWrapper } from './style';

interface ITravelHistoryImage {
  src?: string;
  alt?: string;
}

const TravelHistoryImage = ({ src, alt }: ITravelHistoryImage) => {
  return (
    <Wrapper>
      <Image
        src={src || '/image/Christmas.png'}
        alt={alt || '크리스마스 사진'}
        width="100%"
        maxWidth="150px"
        height="150px"
        borderRadius="10px"
      />
      <PositionWrapper>
        <AgreementStatus isAgreed={true} />
      </PositionWrapper>
    </Wrapper>
  );
};

export default TravelHistoryImage;
