import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentsWrapper = styled.div`
  flex: 1;
`;

export const Contents = styled.div`
  position: relative;
  margin: 0 auto;

  min-width: 320px;
  width: 100%;
  min-height: 100%;

  ${({ theme }) => theme.desktop} {
    width: 790px;
  }
`;
