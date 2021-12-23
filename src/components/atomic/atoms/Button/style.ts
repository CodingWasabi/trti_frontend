import styled from 'styled-components';

import { IButtonProps } from '@/components/atomic/atoms/Button';

export const ButtonWrapper = styled.button<IButtonProps>`
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};

  margin: ${(props) => props.margin};

  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
