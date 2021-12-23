import React, { useState, useCallback, useRef, useEffect } from 'react';

import Input from '@/components/atomic/atoms/Input';
import Button from '@/components/atomic/atoms/Button';
import Text from '@/components/atomic/atoms/Text';

import GroupInfoBox from '@/components/atomic/molecules/GroupInfoBox';

import { IGroupStateProps } from '@/pages/GroupCreatePage';

import { Contents, InputWrapper } from './style';

interface IGroupInfoPeople {
  email: string;
  members: Array<string>;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMembers: React.Dispatch<React.SetStateAction<IGroupStateProps>>;
}

const GroupInfoPeople = ({ email, members, onChangeEmail, setMembers }: IGroupInfoPeople) => {
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickContents = useCallback(() => {
    setOpen((prev) => !prev);
  }, [open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div>
      <GroupInfoBox icon="PlusPeople">
        <Contents onClick={onClickContents}>인원을 추가하세요</Contents>
      </GroupInfoBox>

      <InputWrapper open={open}>
        <Input
          ref={inputRef}
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력하세요"
          onChange={onChangeEmail}
          width="80%"
          height="50px"
          borderBottom="1px solid black"
        />
        <Button width="50px" height="30px" borderRadius="15px" backgroundColor="#6BE065">
          <Text fontColor="#FFFFFF" fontSize="14px" fontWeight="500">
            추가
          </Text>
        </Button>
      </InputWrapper>
    </div>
  );
};

export default GroupInfoPeople;
