import styled from 'styled-components';

export const Wrapper = styled.ul<{ paddingSize: number; margin: string }>`
  list-style: none;
  overflow-x: scroll;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 500px;

  padding-left: ${(props) => props.paddingSize + 10}px;

  & li:not(:last-child) {
    margin-right: 20px;
  }

  margin: ${(props) => props.margin};

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
