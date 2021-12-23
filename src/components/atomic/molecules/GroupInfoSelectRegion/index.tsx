import React from 'react';

import { regions } from '@/lib/constants';

import Select from '@/components/atomic/atoms/Select';

import GroupInfoBox from '@/components/atomic/molecules/GroupInfoBox';

interface IGroupInfoSelectRegion {
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GroupInfoSelectRegion = ({ onChangeSelect }: IGroupInfoSelectRegion) => {
  return (
    <GroupInfoBox icon="Marker">
      <Select defaultValue="여행지를 선택하세요" onChangeSelect={onChangeSelect} selectOptions={regions} />
    </GroupInfoBox>
  );
};

export default GroupInfoSelectRegion;
