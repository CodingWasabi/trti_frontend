import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  opacity: 0.4;

  width: 100%;
  height: 100%;
  background-color: #efefef;
`;

export const ModalContents = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 320px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.M_1};

  ${({ theme }) => theme.desktop} {
    max-width: 800px;
    height: 700px;
  }
`;
