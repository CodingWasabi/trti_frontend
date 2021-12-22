import styled from 'styled-components';

const { width, height } = screen;
const halfMargin = Math.floor((width - 790) / 2);

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
  padding: 0px 10px;
  min-width: 320px;
  width: 100%;
  min-height: 100%;

  ${({ theme }) => theme.desktop} {
    width: 790px;
  }
`;

export const PositionWrapper = styled.div`
  position: fixed;
  top: ${height - 50}px;
  left: ${width - 50}px;

  ${({ theme }) => theme.desktop} {
    top: ${height - 200}px;
    left: ${width - halfMargin}px;
  }
`;
