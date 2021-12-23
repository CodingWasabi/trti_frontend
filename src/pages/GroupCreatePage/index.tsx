import React, { useEffect, useState } from 'react';

import useGetResponsive from '@/hooks/useGetResponsive';

import Input from '@/components/atomic/atoms/Input';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import EmptyImageLabel from '@/components/atomic/molecules/EmptyImageLabel';
import GroupInfoSelectRegion from '@/components/atomic/molecules/GroupInfoSelectRegion';
import GroupInfoCalendar from '@/components/atomic/molecules/GroupInfoCalendar';
import GroupInfoPeople from '@/components/atomic/molecules/GroupInfoPeople';

import AppLayout from '@/components/common/AppLayout';

import { StyledH1, GroupInfoInputWrapper } from './style';

export interface IGroupStateProps {
  name: string;
  region: string;
  email: string;
  members: Array<string>;
}

const GroupCreatePage = () => {
  const [groupState, setGroupState] = useState<IGroupStateProps>({
    name: '',
    region: '',
    email: '',
    members: ['zz'],
  });
  const [date, setDate] = useState<Array<Date>>([new Date(), new Date()]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const isDesktop = useGetResponsive() > 1024;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupState({
      ...groupState,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupState({
      ...groupState,
      region: e.target.value,
    });
  };

  useEffect(() => {
    if (groupState.name !== '' && groupState.members.length > 0 && groupState.region !== '' && date.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [groupState, date]);

  return (
    <AppLayout>
      <StyledH1 style={{ marginBottom: '20px' }}>여행 그룹 만들기</StyledH1>
      <EmptyImageLabel width={isDesktop ? 280 : 200} height={isDesktop ? 220 : 160} margin="0 0 20px 0" />
      <Input
        type="text"
        name="name"
        width={isDesktop ? '400px' : '200px'}
        height={'30px'}
        borderBottom="1px solid #A0A0A0"
        textAlign="center"
        margin="0 0 25px 0"
        value={groupState.name}
        onChange={onChangeInput}
        placeholder="그룹 이름 입력"
      />

      <GroupInfoInputWrapper>
        <GroupInfoSelectRegion onChangeSelect={onChangeSelect} />
        <GroupInfoCalendar date={date} setDate={setDate} />
        <GroupInfoPeople
          email={groupState.email}
          members={groupState.members}
          onChangeEmail={onChangeInput}
          setMembers={setGroupState}
        />
      </GroupInfoInputWrapper>

      <LeftRadiusButton
        width={isDesktop ? '450px' : '335px'}
        backgroundColor={isSelected ? '#FF7F8C' : '#A0A0A0'}
        margin="0 0 30px 0"
        disabled={isSelected ? false : true}>
        그룹 생성하기
      </LeftRadiusButton>
    </AppLayout>
  );
};

export default GroupCreatePage;
