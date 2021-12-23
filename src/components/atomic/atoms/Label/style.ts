import styled from 'styled-components';

import { ILabelProps } from '@/components/atomic/atoms/Label';

export const StyledLabel = styled.label<ILabelProps>`
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${(props) => props.margin};

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;
