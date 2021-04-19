import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.title};
}

h1 {
  font-size: 2em;
}

h2 { 
  font-size: 1.5em; 
}

h3 { 
  font-size: 1.17em; 
}

h4 { 
  font-size: 1.12em; 
}

h5 { 
  font-size: .83em; 
}

h6 { 
  font-size: .75em; 
}

p {
  font-size: 1em;
  line-height: 1.8;
}
`;

export default GlobalStyles;
