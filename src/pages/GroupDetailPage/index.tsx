import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Text from '@/components/atomic/atoms/Text';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import GroupResultInfo from '@/components/atomic/molecules/GroupResultInfo';
import MemberScrollBox from '@/components/atomic/molecules/MemberScrollBox';

import TravelAgreement from '@/components/atomic/organisms/TravelAgreement';
import SuggestionScrollBox from '@/components/atomic/organisms/SuggestionScrollBox';

import AppLayout from '@/components/common/AppLayout';

import { IParams } from '@/types/travelHistory';

import { Theme } from '@/theme/Theme';

import { partyInfo, partyResultList, partyMemberList, partySuggestionList } from '@/mock';

import { StyledLink, SuggestionWrapper } from './style';

const GroupDetailPage = ({ match: { params } }: RouteComponentProps) => {
  const { id } = params as IParams;

  return (
    <AppLayout>
      <GroupResultInfo party={partyInfo.party} />
      <MemberScrollBox members={partyMemberList.members} margin="0 0 20px 0" />
      <TravelAgreement partyResultList={partyResultList} isAgreed={partyInfo.party.isAgreed} />
      {partyInfo.party.isAgreed === false && (
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
