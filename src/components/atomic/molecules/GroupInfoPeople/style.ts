import styled from 'styled-components';

export const Contents = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-width: 310px;

  background-color: ${({ theme }) => theme.B_2};
  border-radius: 15px;

  padding: 10px 20px;

  ${({ theme }) => theme.desktop} {
    max-width: 500px;
  }

  & > div {
    margin-right: 15px;
  }
`;

export const InputWrapper = styled.div<{ open: boolean }>`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  position: relative;
  top: -10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 310px;

  background-color: ${({ theme }) => theme.B_2};

  padding: 10px 20px;

  ${({ theme }) => theme.desktop} {
    max-width: 500px;
  }

  transform: translateY(0) to translateY(100%);
`;
