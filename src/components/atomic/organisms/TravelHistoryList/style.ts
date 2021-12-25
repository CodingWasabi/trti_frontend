import styled from 'styled-components';

export const Wrapper = styled.div``;

export const GridWrapper = styled.div`
  display: grid;

  grid-column-gap: 5px;
  grid-row-gap: 15px;

  margin-top: 20px;

  width: 100%;

  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
  }

  ${({ theme }) => theme.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
  }
`;
