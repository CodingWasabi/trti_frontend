import styled from 'styled-components';

import { ILeftRadiusBoxProps } from '@/components/atomic/atoms/LeftRadiusBox';

export const LeftRadiusBoxContents = styled.div<ILeftRadiusBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px 0px 0px 0px;
`;
