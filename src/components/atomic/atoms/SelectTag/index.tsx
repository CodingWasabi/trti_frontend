import React, { MouseEvent, ReactText } from 'react';
import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

interface ISelectTagProps {
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  isSelected: boolean;
}

interface ISelectTagComponentProps extends ISelectTagProps {
  children?: ReactText;
}

const Wrapper = styled.span<ISelectTagProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 190px;
  height: 36px;
  border-radius: 32px;
  border: ${(props) => (props.isSelected ? Theme.M_1 : Theme.F_3)};
  background-color: ${(props) => (props.isSelected ? Theme.F_1 : Theme.B_2)};
`;

const SelectTag = ({ children, onClick, isSelected }: ISelectTagComponentProps) => {
  return (
    <Wrapper onClick={onClick} isSelected={isSelected}>
      {children}
    </Wrapper>
  );
};

export default SelectTag;
