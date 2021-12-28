import React from 'react';

import Image from '@/components/atomic/atoms/Image';

import SuggestionSummary from '@/components/atomic/molecules/SuggestionSummary';

import { Wrapper } from './style';

interface ISuggestionItemProps {
  name: string;
  location: string;
  imageUrl: string;
}

const SuggestionItem = ({ name, location, imageUrl }: ISuggestionItemProps) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="추천" width="100%" maxWidth="150px" height="150px" borderRadius="10px" />
      <SuggestionSummary name={name} location={location} />
    </Wrapper>
  );
};

export default SuggestionItem;
