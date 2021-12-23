import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 18px;

  margin-bottom: 20px;
`;

export const GroupInfoInputWrapper = styled.div`
  width: 320px;

  ${({ theme }) => theme.desktop} {
    width: 450px;
  }

  margin-bottom: 30px;
  & > div {
    margin-bottom: 10px;
  }
`;
