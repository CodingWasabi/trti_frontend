import styled from 'styled-components';

import { IBurger } from './Burger';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 15px;

  width: 100%;
  min-width: 320px;
  height: 80px;

  ${({ theme }) => theme.desktop} {
    max-width: 1010px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60px;
`;

export const Login = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 23px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.B_2};

  font-weight: 400;
  font-size: 11px;

  a {
    color: ${({ theme }) => theme.F_3};
  }
`;

export const StyledBurger = styled.div<IBurger>`
  cursor: pointer;

  z-index: 1001;
  position: ${({ open }) => (open ? 'fixed' : '')};

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  width: 32px;
  height: 32px;

  ${({ theme }) => theme.desktop} {
    display: none;
  }

  div {
    width: 32px;
    height: 4px;

    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;

    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledUl = styled.ul<IBurger>`
  li {
    padding: 18px 10px;
    color: ${({ theme }) => theme.F_4};
    font-size: 16px;
    font-weight: 500;
  }

  flex-flow: column nowrap;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  width: 300px;
  height: 100vh;

  padding-top: 3.5rem;
  background-color: pink;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.desktop} {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
`;
