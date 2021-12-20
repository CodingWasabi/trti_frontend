import styled from 'styled-components';
import { IImageProps } from '@/components/atomic/atoms/Image';

export const Img = styled.img<IImageProps>`
  object-fit: ${(props) => props.objectFit};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || '0px'};
`;
