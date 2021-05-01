import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.title};
}

h1 {
  font-size: 2.5rem;
}

h2 { 
  font-size: 1.375rem; 
}

h3 { 
  font-size: 1.25rem; 
}

h4 { 
  font-size: 0.875rem; 
}

h5 { 
  font-size: 0.625rem; 
}

p {
  font-size: 1rem;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fonts.paragraph};
}

span {
  font-family: ${({ theme }) => theme.fonts.paragraph};
}

text {
  font-family: ${({ theme }) => theme.fonts.paragraph};
}

button {
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
}

input[type=text] {
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  outline: none;
}

hr {
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
}
`;

export default GlobalStyles;
