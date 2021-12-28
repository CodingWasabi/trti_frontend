import styled from 'styled-components';

import { Theme } from '@/theme/Theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 10px;

  border: 0.5px solid ${Theme.F_3};
  border-radius: 15px;

  & > span {
    margin-bottom: 20px;
  }
`;
