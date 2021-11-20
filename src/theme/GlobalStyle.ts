import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: Noto Sans CJK KR, sans-serif;
    letter-spacing: -0.03px;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
  input {
    font-family: Noto Sans CJK KR, sans-serif;
    all: unset;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;
