import React from 'react';

import Label from '@/components/atomic/atoms/Label';
import Icon from '@/components/atomic/atoms/Icon';

import { StyledInput } from './style';

interface IEmptyImageLabel {
  width: number;
  height: number;
  margin?: string;
}

const EmptyImageLabel = ({ width, height, margin = '0' }: IEmptyImageLabel) => {
  return (
    <>
      <Label
        width={width}
        height={height}
        margin={margin}
        backgroundColor="#F5F5F5"
        borderRadius="10px"
        cursor={true}
        htmlFor="file">
        <Icon icon="EmptyImage" width={30} height={30} />
      </Label>
      <StyledInput id="file" type="file" accept="image/png, image/jpeg" />
    </>
  );
};

export default EmptyImageLabel;
