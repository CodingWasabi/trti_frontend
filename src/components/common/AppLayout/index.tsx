import React, { useState, useEffect, useRef } from 'react';

import useGetResponsive from '@/hooks/useGetResponsive';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import PlusButton from '@/components/atomic/atoms/PlusButton';

import NavBar from '@/components/atomic/molecules/NavBar';

import { Wrapper, ContentsWrapper, Contents, PlusButtonWrapper } from './style';

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
      <PlusButtonWrapper width={width} height={height}>
        <PlusButton />
      </PlusButtonWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
