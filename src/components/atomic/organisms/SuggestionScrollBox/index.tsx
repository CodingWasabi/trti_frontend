import React from 'react';

import TravelHistory from '@/components/atomic/organisms/TravelHistory';
import SuggestionItem from '@/components/atomic/molecules/SuggestionItem';

import ScrollXBox from '@/components/common/ScrollXBox';

interface ISuggestionScrollBoxProps {
  data: Array<{
    name: string;
    imageUrl: string;
    address: string;
    link: string;
  }>;
  margin: string;
}

const SuggestionScrollBox = ({ data, margin }: ISuggestionScrollBoxProps) => {
  return (
    <ScrollXBox margin={margin} type="suggestion">
      {data.map((item) => (
        <li>
          <a href={item.link} target="_blank">
            <SuggestionItem name={item.name} location={item.address} imageUrl={item.imageUrl} />
          </a>
        </li>
      ))}
    </ScrollXBox>
  );
};

export default SuggestionScrollBox;
