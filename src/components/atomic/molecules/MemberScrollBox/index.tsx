import React from 'react';

import MemberProfile from '@/components/atomic/molecules/MemberProfile';

import ScrollXBox from '@/components/common/ScrollXBox';

interface IMemberScrollBoxProps {
  members: Array<{
    nickname: string;
    imageUrl: string;
  }>;
  margin: string;
}

const MemberScrollBox = ({ members, margin }: IMemberScrollBoxProps) => {
  return (
    <ScrollXBox margin={margin} type="member">
      {members.map((member) => (
        <li>
          <MemberProfile imageUrl={member.imageUrl}>{member.nickname}</MemberProfile>
        </li>
      ))}
    </ScrollXBox>
  );
};

export default MemberScrollBox;
