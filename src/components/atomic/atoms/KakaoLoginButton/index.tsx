import React from 'react';

import Button from '@/components/atomic/atoms/Button';
import Text from '@/components/atomic/atoms/Text';

interface IKakaoLoginButtonProps {
  onClick: () => void;
}

const KakaoLoginButton = ({ onClick }: IKakaoLoginButtonProps) => {
  return (
    <Button
      maxWidth="375px"
      width="100%"
      height="54px"
      backgroundColor="#FEE500"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
      onClick={onClick}>
      <Text fontColor="black" fontSize="16px" fontWeight="500">
        카카오 로그인
      </Text>
    </Button>
  );
};

export default KakaoLoginButton;
