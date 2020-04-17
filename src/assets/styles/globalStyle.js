import { createGlobalStyle } from 'styled-components';
import * as variables from '../styles/variables';

// global style component which contains global styles for this app
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px
    
    @media(max-width: 700px){
    font-size: 56.25%;
    }
    
    @media(max-width: 500px){
    font-size: 50%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0rem ;
    font-family: 'Montserrat';
    
    background-color: ${variables.primaryGrey};
    
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
