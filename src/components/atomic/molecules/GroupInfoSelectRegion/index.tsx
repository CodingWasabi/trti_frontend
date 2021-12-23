import React from 'react';

import { regions } from '@/lib/constants';

import Select from '@/components/atomic/atoms/Select';

import GroupInfoInput from '@/components/atomic/molecules/GroupInfoInput';

interface IGroupInfoSelectRegion {
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GroupInfoSelectRegion = ({ onChangeSelect }: IGroupInfoSelectRegion) => {
  return (
    <GroupInfoInput icon="Marker">
      <Select defaultValue="여행지를 선택하세요" onChangeSelect={onChangeSelect} selectOptions={regions} />
    </GroupInfoInput>
  );
};

export default GroupInfoSelectRegion;
