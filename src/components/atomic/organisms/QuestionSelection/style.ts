import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  & div {
    margin-bottom: 20px;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 300px;
  height: 300px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;
