import React from 'react';

import { StyledSelect, StyledOption } from './style';

interface ISelectProps {
  defaultValue: string;
  selectOptions: Array<string>;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ defaultValue, selectOptions, onChangeSelect }: ISelectProps) => {
  return (
    <StyledSelect onChange={onChangeSelect}>
      <StyledOption value="">{defaultValue}</StyledOption>
      {selectOptions.map((option) => (
        <StyledOption key={option} value={option}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
