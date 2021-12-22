import React from 'react';

import { StyledLabel } from './style';

export interface ILabelProps {
  width: string;
  height: string;
  backgroundColor: string;
  borderRadius?: string;
  htmlFor: string;
  cursor?: boolean;
}

interface ILabelComponentProps extends ILabelProps {
  children: React.ReactNode;
}

const Label = ({ backgroundColor, borderRadius, htmlFor, cursor = false, children, ...size }: ILabelComponentProps) => {
  return (
    <StyledLabel
      {...size}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      cursor={cursor}
      htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;
