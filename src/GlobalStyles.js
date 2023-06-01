import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background-color: #e7e7e7;
    font-size: 18px;
  }
`;

export default GlobalStyles;
