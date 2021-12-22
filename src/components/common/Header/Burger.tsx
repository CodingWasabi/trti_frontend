import React, { useState } from 'react';

import LeftNav from '@/components/common/Header/LeftNav';

import { StyledBurger } from './style';

export interface IBurger {
  open: boolean;
}

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen((prev) => !prev)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} />
    </>
  );
};

export default Burger;
