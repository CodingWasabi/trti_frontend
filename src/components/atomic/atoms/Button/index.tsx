import React, { MouseEvent } from 'react';

import { Theme } from '@/theme/Theme';

import { ButtonWrapper } from './style';

export interface IButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  maxWidth?: string;
  width: string;
  height: string;
  backgroundColor: string;
  type?: 'button' | 'submit' | 'reset';
  fontColor?: string;
  fontSize?: string;
  fontWeight?: number;
  borderRadius?: string;
  boxShadow?: string;
  margin?: string;
  disabled?: boolean;
}

interface IButtonComponentProps extends IButtonProps {
  children?: React.ReactNode;
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
  boxShadow = '0',
  margin = '0',
  disabled = false,
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
      boxShadow={boxShadow}
      onClick={onClick}
      margin={margin}
      disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
