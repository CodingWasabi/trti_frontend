import React, { ImgHTMLAttributes } from 'react';

import { StyledImg } from './style';

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width: string;
  height: string;
}

const Img = ({ src, alt, ...size }: IImageProps) => {
  return <StyledImg src={src} alt={alt} {...size} />;
};

export default Img;
