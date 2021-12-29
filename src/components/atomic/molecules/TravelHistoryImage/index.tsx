import React from 'react';

import Image from '@/components/atomic/atoms/Image';
import AgreementStatus from '@/components/atomic/atoms/AgreementStatus';

import { ITravelHistoryImage } from '@/types/travelHistory';

import { Wrapper, PositionWrapper } from './style';

const TravelHistoryImage = ({ imageUrl, alt, isAgreed }: ITravelHistoryImage) => {
  return (
    <Wrapper>
      <Image
        src={imageUrl || '/image/Christmas.png'}
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
