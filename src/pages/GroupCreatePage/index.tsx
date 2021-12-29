import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import useGetResponsive from '@/hooks/useGetResponsive';
import useGetMyInfo from '@/hooks/useGetMyInfo';

import { uploadImage } from '@/lib/api/image';
import client from '@/lib/api/client';

import Input from '@/components/atomic/atoms/Input';
import Image from '@/components/atomic/atoms/Image';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import EmptyImageLabel from '@/components/atomic/molecules/EmptyImageLabel';
import GroupInfoSelectRegion from '@/components/atomic/molecules/GroupInfoSelectRegion';
import GroupInfoCalendar from '@/components/atomic/molecules/GroupInfoCalendar';
import GroupInfoPeople from '@/components/atomic/molecules/GroupInfoPeople';

import AppLayout from '@/components/common/AppLayout';

import { Wrapper, StyledH1, GroupInfoInputWrapper } from './style';

export interface IGroupStateProps {
  title: string;
  location: string;
  email: string;
  // members: Array<number>;
}

const GroupCreatePage = () => {
  const { myInfo, isLoading: isGetMyInfoLoading, error: myInfoError, mutate: myInfoMutate } = useGetMyInfo();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState<string>('');
  // const [name, setName] = useState<string>('');
  // const [location, setRegion] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  const [members, setMembers] = useState<Array<number>>([]);
  const [groupState, setGroupState] = useState<IGroupStateProps>({
    title: '',
    location: '',
    email: '',
    // members: [],
  });
  const [date, setDate] = useState<Array<Date>>([new Date(), new Date()]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const isDesktop = useGetResponsive() > 1024;

  const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const formData = new FormData();
      console.log(files);
      const file = files[0];
      formData.append('image', file);
      try {
        const {
          data: { imageUrl },
        } = await uploadImage(formData);
        setImageUrl(imageUrl);
      } catch (imgError) {
        console.log(imgError);
      }
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupState({
      ...groupState,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupState({
      ...groupState,
      location: e.target.value,
    });
  };

  const onClickCreateGroup = async () => {
    const body = {
      title: groupState.title,
      location: groupState.location,
      members,
      imageUrl,
      period: date,
    };
    const res = await client.post('/party', body);

    if (res.status === 200) {
      history.push(`/group/${res.data.id}`);
    }
  };

  useEffect(() => {
    if (groupState.title !== '' && members.length > 0 && groupState.location !== '' && date.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [groupState, members, date]);

  if (!isGetMyInfoLoading && !myInfo) {
    return <Redirect to="/login" />;
  }

  return (
    <AppLayout>
      <Wrapper>
        <StyledH1 style={{ marginBottom: '20px' }}>여행 그룹 만들기</StyledH1>
        {imageUrl === '' ? (
          <EmptyImageLabel
            onChangeImg={onChangeImg}
            width={isDesktop ? 280 : 200}
            height={isDesktop ? 220 : 160}
            margin="0 0 20px 0"
          />
        ) : (
          <Image src={imageUrl} width={isDesktop ? '280px' : '200px'} height={isDesktop ? '220px' : '160px'} />
        )}
        <Input
          type="text"
          name="title"
          width={isDesktop ? '400px' : '200px'}
          height={'30px'}
          borderBottom="1px solid #A0A0A0"
          textAlign="center"
          margin="0 0 25px 0"
          value={groupState.title}
          onChange={onChangeInput}
          placeholder="그룹 이름 입력"
        />

        <GroupInfoInputWrapper>
          <GroupInfoSelectRegion onChangeSelect={onChangeSelect} />
          <GroupInfoCalendar date={date} setDate={setDate} />
          <GroupInfoPeople
            email={groupState.email}
            members={members}
            onChangeEmail={onChangeInput}
            setMembers={setMembers}
          />
        </GroupInfoInputWrapper>

        <LeftRadiusButton
          onClick={onClickCreateGroup}
          width={isDesktop ? '450px' : '335px'}
          backgroundColor={isSelected ? '#FF7F8C' : '#A0A0A0'}
          margin="0 0 30px 0"
          disabled={isSelected ? false : true}>
          그룹 생성하기
        </LeftRadiusButton>
      </Wrapper>
    </AppLayout>
  );
};

export default GroupCreatePage;
