import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url(//db.onlinewebfonts.com/c/7200c6dd8ac604abe09f5159e53a40c0?family=Mark+Pro);
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  html,
  body {
    background-color: ${({ theme }) => theme.colors.White};
    font-family: "Mark Pro";
  }
  ul, 
  ol {  
    padding: 0;
    list-style-type: none;
    margin: 0;
  }
  
  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    width: 100%;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-bottom:  1px solid ${({ theme }) => theme.colors.gray100};
    border-top: none;
  }
`
export default GlobalStyle