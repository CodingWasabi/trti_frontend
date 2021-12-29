import React from 'react';

import Text from '@/components/atomic/atoms/Text';
import Icon from '@/components/atomic/atoms/Icon';
import TreatyAgreementText from '@/components/atomic/atoms/TreatyAgreementText';

import useGetTreatySelectionInfo from '@/hooks/useGetTreatySelectionInfo';

import TreatySelectionBox from '@/components/atomic/molecules/TreatySelectionBox';

import { Theme } from '@/theme/Theme';

import { Wrapper } from './style';

interface ITravelAgreementProps {
  isAgreed: boolean;
  partyResultList: Array<{
    id: number;
    isAgreed: boolean;
    count0: string;
    count1: string;
    selected: number;
  }>;
}

const TravelAgreement = ({ isAgreed, partyResultList }: ITravelAgreementProps) => {
  return (
    <Wrapper>
      <Text fontColor={Theme.F_4} fontSize="18px" fontWeight="700">
        여행 합의서
      </Text>
      <TreatyAgreementText isAgreed={isAgreed} />
      {partyResultList.map((result) => {
        const { title, color } = useGetTreatySelectionInfo(result.id);
        return (
          <TreatySelectionBox
            title={`${result.id}. ${title}`}
            isAgreed={result.isAgreed}
            color={color}
            count0={result.count0}
            count1={result.count1}
            selected={result.selected}
          />
        );
      })}
      <Icon icon="Logo" width={100} height={70} />
    </Wrapper>
  );
};

export default TravelAgreement;
