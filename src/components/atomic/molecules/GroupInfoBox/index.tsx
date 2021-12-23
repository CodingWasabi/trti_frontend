import React from 'react';

import Icon, { IconOption } from '@/components/atomic/atoms/Icon';

import { Wrapper } from './style';

interface IGroupInfoBoxProps {
  icon: IconOption;
}

interface IGroupInfoBoxComponentProps extends IGroupInfoBoxProps {
  children: React.ReactNode;
}

const GroupInfoBox = ({ icon, children }: IGroupInfoBoxComponentProps) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      {children}
    </Wrapper>
  );
};

export default GroupInfoBox;
