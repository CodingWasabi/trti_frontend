import React, { MouseEvent } from 'react';

import Button from '@/components/atomic/atoms/Button';
import Text from '@/components/atomic/atoms/Text';

interface ILeftRadiusButtonProps {
  width: string;
  backgroundColor: string;
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
      margin={margin}
      disabled={disabled}
      onClick={onClick}>
      <Text fontColor="#FFFFFF" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </Button>
  );
};

export default LeftRadiusButton;
