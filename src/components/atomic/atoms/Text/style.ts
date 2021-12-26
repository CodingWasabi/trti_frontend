import styled from 'styled-components';

import { ITextProps } from '@/components/atomic/atoms/Text';

export const StyledSpan = styled.span<ITextProps>`
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};

  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  text-align: ${(props) => props.textAlign};
`;
