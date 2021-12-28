import React from 'react';

import Image from '@/components/atomic/atoms/Image';
import Text from '@/components/atomic/atoms/Text';

import { Theme } from '@/theme/Theme';

import { Wrapper } from './style';

interface IMemberProfileProps {
  imageUrl: string;
}

interface IMemberProfileComponentProps extends IMemberProfileProps {
  children: React.ReactChild;
}

const MemberProfile = ({ children, imageUrl }: IMemberProfileComponentProps) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="프로필 사진" maxWidth="46px" width="46px" height="46px" borderRadius="50%" />
      <Text fontColor={Theme.F_3} fontSize="12px" fontWeight="500">
        {children}
      </Text>
    </Wrapper>
  );
};

export default MemberProfile;
