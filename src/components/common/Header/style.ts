import styled from 'styled-components';

export const Wrapper = styled.div`
  position: static;
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

  width: 120px;
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
