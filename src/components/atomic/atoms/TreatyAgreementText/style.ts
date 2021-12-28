import styled from 'styled-components';

export const Wrapper = styled.div<{ isAgreed?: boolean }>`
  display: flex;
  align-items: center;

  visibility: ${(props) => (props.isAgreed ? 'visible' : 'hidden')};
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
