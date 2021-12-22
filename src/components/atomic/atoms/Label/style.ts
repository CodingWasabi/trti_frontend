import styled from 'styled-components';

import { ILabelProps } from '@/components/atomic/atoms/Label';

export const StyledLabel = styled.label<ILabelProps>`
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;
