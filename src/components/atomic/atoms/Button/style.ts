import styled from 'styled-components';

import { IButtonProps } from '@/components/atomic/atoms/Button';

export const ButtonWrapper = styled.button<IButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
  margin: ${(props) => props.margin};

  font: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
