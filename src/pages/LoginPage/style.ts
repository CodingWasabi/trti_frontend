import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 375px;
  width: 100%;
  height: 40vh;

  margin-top: 0px;
`;

export const ButtonWrapper = styled.div`
  max-width: 375px;
  width: 100%;

  & > button:not(:last-child) {
    margin-bottom: 20px;
  }
`;
