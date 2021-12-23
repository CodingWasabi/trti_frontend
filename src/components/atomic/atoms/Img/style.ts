import styled from 'styled-components';

import { IImageProps } from '@/components/atomic/atoms/Img';

export const StyledImg = styled.img<IImageProps>`
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
