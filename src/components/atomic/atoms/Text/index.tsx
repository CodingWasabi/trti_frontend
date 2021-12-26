import React from 'react';

import { StyledSpan } from './style';

export interface ITextProps {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
  cursor?: boolean;
  textAlign?: string;
  onClick?: () => void;
}

interface ITextComponentProps extends ITextProps {
  children: React.ReactNode;
}

const Text = ({
  fontColor,
  fontSize,
  fontWeight,
  cursor = false,
  textAlign = '',
  children,
  onClick,
}: ITextComponentProps) => {
  return (
    <StyledSpan
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      cursor={cursor}
      onClick={onClick}>
      {children}
    </StyledSpan>
  );
};

export default Text;
