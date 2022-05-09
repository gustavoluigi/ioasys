import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  
  *,
  *::before,
  *::after {
    font-family: 'Heebo', sans-serif;
    box-sizing: inherit;
  }
`;
