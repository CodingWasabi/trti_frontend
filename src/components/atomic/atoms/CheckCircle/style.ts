import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.M_1};
  border-radius: 50%;
`;
