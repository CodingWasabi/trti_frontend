import React, { MouseEvent, ReactText } from 'react';
import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

interface IButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  width: string;
  height: string;
  backgroundColor: string;
  type?: 'button' | 'submit' | 'reset';
  fontColor?: string;
  fontSize?: string;
  fontWeight?: number;
  borderRadius?: string;
  margin?: string;
}

const ButtonWrapper = styled.button<IButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};

  font: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

interface IButtonComponentProps extends IButtonProps {
  children?: ReactText;
}

const Button = ({
  children,
  onClick,
  backgroundColor,
  type = 'button',
  fontColor = Theme.F_3,
  fontSize = '14px',
  fontWeight = 500,
  borderRadius = '0px',
  margin = '0',
  ...size
}: IButtonComponentProps) => {
  return (
    <ButtonWrapper
      {...size}
      type={type}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      onClick={onClick}
      margin={margin}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
