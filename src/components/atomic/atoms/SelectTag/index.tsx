import React, { useState, useEffect, MouseEvent, ReactText } from 'react';
import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

interface ISelectTagProps {
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  checkedValue: string | null;
}

interface ISelectTagStyledProps {
  isSelected: boolean;
  margin: string;
}

interface ISelectTagComponentProps extends ISelectTagProps {
  children?: ReactText;
  margin: string;
}

const Wrapper = styled.span<ISelectTagStyledProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100px;
  width: 100%;

  ${({ theme }) => theme.desktop} {
    min-width: 190px;
  }
  height: 36px;

  color: ${(props) => (props.isSelected ? Theme.F_4 : '#707070')};

  margin: ${(props) => props.margin};
  border-radius: 32px;
  border: ${(props) => (props.isSelected ? `1px solid ${Theme.M_1}` : `1px solid ${Theme.F_3}`)};
  background-color: ${(props) => (props.isSelected ? Theme.F_1 : Theme.B_2)};
`;

const SelectTag = ({ children, onClick, checkedValue, margin = '0px' }: ISelectTagComponentProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  useEffect(() => {
    if (checkedValue === children) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  });

  return (
    <Wrapper onClick={onClick} isSelected={isSelected} margin={margin}>
      {children}
    </Wrapper>
  );
};

export default SelectTag;
