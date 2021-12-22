import React from 'react';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import PlusButton from '@/components/atomic/atoms/PlusButton';

import NavBar from '@/components/atomic/molecules/NavBar';

import { Wrapper, ContentsWrapper, Contents, PositionWrapper } from './style';

interface IAppLayoutComponentProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutComponentProps) => {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      <ContentsWrapper>
        <Contents>{children}</Contents>
      </ContentsWrapper>
      <PositionWrapper>
        <PlusButton />
      </PositionWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
