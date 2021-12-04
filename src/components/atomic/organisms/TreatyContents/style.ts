import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.desktop} {
    max-width: 760px;
  }
`;

export const RingWrapper = styled.div`
  position: relative;
  right: 5px;
  z-index: 999;

  display: flex;
  flex-direction: column;
`;
