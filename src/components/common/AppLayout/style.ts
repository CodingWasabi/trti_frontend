import styled from 'styled-components';

import useGetClientRect from '@/hooks/useGetClientRect';

import { IAppLayout } from '@/components/common/AppLayout';

import { Theme } from '@/theme/Theme';

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

export const ContentsWrapper = styled.div<IAppLayout>`
  flex: 1;
  background-color: ${(props) => (props.isBlurred ? Theme.B_2 : Theme.F_1)};
`;

export const Contents = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: 27px;

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
