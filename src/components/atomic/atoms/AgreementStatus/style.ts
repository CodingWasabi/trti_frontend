import styled from 'styled-components';

import { IAgreementStatus } from '@/components/atomic/atoms/AgreementStatus';

export const Wrapper = styled.div<IAgreementStatus>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 18px;

  background-color: ${(props) => (props.isAgreed ? ({ theme }) => theme.M_1 : ({ theme }) => theme.M_3)};
  border-radius: 20px;
`;
