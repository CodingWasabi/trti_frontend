import styled from 'styled-components';

import useGetClientRect from '@/hooks/useGetClientRect';

const { width, height } = useGetClientRect();

interface IPlusButtonWrapper {
  width: number | undefined;
  height: number | undefined;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const ContentsWrapper = styled.div`
  flex: 1;
`;

export const Contents = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 0px 10px;
  min-width: 320px;
  width: 100%;
  min-height: 100%;
  ${({ theme }) => theme.desktop} {
    max-width: 790px;
  }
`;

export const PlusButtonWrapper = styled.div<IPlusButtonWrapper>`
  position: absolute;
  top: ${height - 100}px;
  left: ${width - 250}px;
`;
