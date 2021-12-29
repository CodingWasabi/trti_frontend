import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import useGetPartynfo from '@/hooks/useGetPartyInfo';
import useGetPartyMembers from '@/hooks/useGetPartyMembers';
import useGetPartyResult from '@/hooks/useGetPartyResult';

import Text from '@/components/atomic/atoms/Text';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import GroupResultInfo from '@/components/atomic/molecules/GroupResultInfo';
import MemberScrollBox from '@/components/atomic/molecules/MemberScrollBox';

import TravelAgreement from '@/components/atomic/organisms/TravelAgreement';
import SuggestionScrollBox from '@/components/atomic/organisms/SuggestionScrollBox';

import AppLayout from '@/components/common/AppLayout';

import { IParams } from '@/types/travelHistory';

import { Theme } from '@/theme/Theme';

import { partyResultList, partySuggestionList } from '@/mock';

import { StyledLink, SuggestionWrapper } from './style';

const GroupDetailPage = ({ match: { params } }: RouteComponentProps) => {
  const { id } = params as IParams;
  const {
    partyInfo,
    isLoading: isGetPartyInfoLoading,
    error: partyInfoError,
    mutate: partyInfoMutate,
  } = useGetPartynfo(id);
  const {
    memberInfo,
    isLoading: isGetPartyMemberLoading,
    error: memberInfoError,
    mutate: memberInfoMutate,
  } = useGetPartyMembers(id);
  const {
    partyResultList: partyAnswer,
    isLoading: isGetPartyResultListLoading,
    error: partyResultListError,
    mutate: getResultMutate,
  } = useGetPartyResult(id);

  return (
    <AppLayout>
      {partyInfo && <GroupResultInfo party={partyInfo} />}
      {memberInfo && <MemberScrollBox members={memberInfo.members} margin="0 0 20px 0" />}
      {partyResultList && <TravelAgreement partyResultList={partyResultList} isAgreed={partyInfo.isAgreed} />}
      {partyInfo.isAgreed === false && (
        <StyledLink to={`/group/${id}/agree`}>
          <LeftRadiusButton width="100%" backgroundColor={Theme.C_1}>
            합의하러 가기
          </LeftRadiusButton>
        </StyledLink>
      )}
      <SuggestionWrapper>
        <Text fontColor={Theme.F_4} fontSize="17px" fontWeight="500">
          추천 액티비티
        </Text>
        <SuggestionScrollBox data={partySuggestionList.activities} margin="20px 0" />
      </SuggestionWrapper>
      <SuggestionWrapper>
        <Text fontColor={Theme.F_4} fontSize="17px" fontWeight="500">
          추천 맛집
        </Text>
        <SuggestionScrollBox data={partySuggestionList.restaurant} margin="20px 0" />
      </SuggestionWrapper>
    </AppLayout>
  );
};

export default GroupDetailPage;
