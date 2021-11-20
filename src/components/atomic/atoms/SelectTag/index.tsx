import React, { MouseEvent, ReactText } from 'react';
import styled from 'styled-components';

interface ISelectTagProps {
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

interface ISelectTagComponentProps extends ISelectTagProps {
  children?: ReactText;
}

const Wrapper = styled.span<ISelectTagProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 46px;
  border-radius: 20px;
  background-color: pink;
`;

const SelectTag = ({ children, onClick }: ISelectTagComponentProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default SelectTag;
