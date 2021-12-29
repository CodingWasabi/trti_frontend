import React from 'react';

import { Img } from '@/components/atomic/atoms/Image/style';

export interface IImageProps {
  objectFit?: string;
  src: string;
  alt?: string;
  maxWidth?: string;
  width: string;
  height: string;
  borderRadius?: string;
}

const Image = ({ objectFit = 'cover', src, alt = '', ...size }: IImageProps) => {
  return <Img objectFit={objectFit} src={src} alt={alt} {...size} />;
};

export default Image;
