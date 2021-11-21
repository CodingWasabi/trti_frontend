import React from 'react';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { Wrapper, ContentsWrapper, Contents } from './style';

interface IAppLayoutComponentProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutComponentProps) => {
  return (
    <Wrapper>
      <Header />
      <ContentsWrapper>
        <Contents>{children}</Contents>
      </ContentsWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
