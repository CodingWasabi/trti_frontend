import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-width: 310px;

  background-color: ${({ theme }) => theme.B_2};
  border-radius: 15px;

  padding: 10px 20px;

  ${({ theme }) => theme.desktop} {
    max-width: 500px;
  }

  & > div {
    margin-right: 15px;
  }
`;
