import React, { MouseEvent } from 'react';

import Button from '@/components/atomic/atoms/Button';
import Text from '@/components/atomic/atoms/Text';

interface ILeftRadiusButtonProps {
  width: string;
  backgroundColor: string;
  fontColor?: string;
  boxShadow?: string;
  margin?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface ILeftRadiusButtonComponentProps extends ILeftRadiusButtonProps {
  children: React.ReactNode;
}

const LeftRadiusButton = ({
  width,
  backgroundColor,
  fontColor = '#FFFFFF',
  boxShadow = '0',
  margin,
  disabled = false,
  onClick,
  children,
}: ILeftRadiusButtonComponentProps) => {
  return (
    <Button
      maxWidth="375px"
      width={width}
      height="54px"
      backgroundColor={backgroundColor}
      borderRadius="20px 0px 0px 0px"
      boxShadow={boxShadow}
      margin={margin}
      disabled={disabled}
      onClick={onClick}>
      <Text fontColor={fontColor} fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </Button>
  );
};

export default LeftRadiusButton;
