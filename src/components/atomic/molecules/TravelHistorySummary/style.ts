import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 150px;
  width: 100%;
`;

export const DescriptionBox = styled.div``;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
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
