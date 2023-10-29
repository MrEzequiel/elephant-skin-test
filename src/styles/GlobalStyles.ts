import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.white};
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    background: transparent;
    font-family: inherit;
    border: none;
  }
`;

export default GlobalStyle;
