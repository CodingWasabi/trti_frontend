import React, { useState, MouseEvent, useEffect } from 'react';

import SelectTag from '@/components/atomic/atoms/SelectTag';

import { Wrapper } from './style';

export interface ITreatyContentListProps {
  tags?: Array<string>;
  right?: string;
}

const TreatyContentsList = ({
  tags = ['저렴한', '게스트하우스', '호텔', '호텔', '호텔'],
  right,
}: ITreatyContentListProps) => {
  const [checkedValue, setCheckedValue] = useState<string | null>('');

  const onClick = (e: MouseEvent<HTMLSpanElement>) => {
    setCheckedValue(e.currentTarget.textContent);
  };

  return (
    <Wrapper right={right}>
      {tags.map((tag, idx) => (
        <SelectTag key={idx} onClick={onClick} checkedValue={checkedValue} margin="5px">
          {tag}
        </SelectTag>
      ))}
    </Wrapper>
  );
};

export default TreatyContentsList;
