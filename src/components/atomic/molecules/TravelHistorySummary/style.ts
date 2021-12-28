import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 150px;
  width: 100%;
`;

export const DescriptionBox = styled.div``;

export const FlexWrapper = styled.div<{ isBlackType: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => !props.isBlackType && 'center'};
`;

export const ParticipantsCountWrapper = styled.div`
  display: flex;
  align-items: center;

  & {
    margin-left: 10px;
  }

  & > svg {
    margin-right: 5px;
  }
`;
