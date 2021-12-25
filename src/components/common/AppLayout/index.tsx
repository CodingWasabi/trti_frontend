import React from 'react';

import useGetResponsive from '@/hooks/useGetResponsive';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import NavBar from '@/components/atomic/molecules/NavBar';

import { Wrapper, ContentsWrapper, Contents } from './style';

interface IAppLayoutComponentProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutComponentProps) => {
  const isDesktop = useGetResponsive() > 1024;
  return (
    <Wrapper>
      <Header />
      {isDesktop && <NavBar />}
      <ContentsWrapper>
        <Contents>{children}</Contents>
      </ContentsWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
