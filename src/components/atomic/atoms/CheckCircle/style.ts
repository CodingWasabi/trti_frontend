import styled from 'styled-components';

import { ICheckCircleProps } from '@/components/atomic/atoms/CheckCircle';

export const Wrapper = styled.div<ICheckCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => (props.color ? `2px solid ${props.color}` : '')};
  border-radius: 50%;

  svg {
    path {
      stroke: ${(props) => props.color};
    }
  }
`;
