import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    min-height: 100%;
  }

  body{
    background: #F1F4F9;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container-layout {
    padding: 60px 30px 10px 70px;
  }

  /*MOBILE*/
  @media only screen and (max-width: 768px) {
    .container-layout {
      padding: 60px 20px;
    }
  }
`;
