import styled from 'styled-components';

const { width, height } = screen;
const halfMargin = Math.floor((width - 790) / 2);

export const PositionWrapper = styled.div`
  position: fixed;
  top: ${height - 50}px;
  left: ${width - 50}px;

  ${({ theme }) => theme.desktop} {
    top: ${height - 200}px;
    left: ${width - halfMargin}px;
  }
`;
