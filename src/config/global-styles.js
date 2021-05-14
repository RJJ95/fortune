import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
    color: rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.lightGrey};
  }
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: ${({ theme }) => theme.fonts.title};
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
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
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
}

button {
  font-size: 1rem;
  padding: 15px 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  box-shadow: none;
  cursor: pointer;
}

input, select {
  font-size: 1rem;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 15px;
}

select {
  appearance: none;
  width: 100%;
}
`;

export default GlobalStyles;
