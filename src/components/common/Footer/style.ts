import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 161px;

  background-color: ${({ theme }) => theme.B_2};
`;

export const Contents = styled.div`
  margin: 0 auto;

  width: 100%;
  min-width: 320px;

  ${({ theme }) => theme.desktop} {
    max-width: 1010px;
  }
`;
