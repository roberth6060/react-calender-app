import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 20px 40px;
  background-image: url("https://images.unsplash.com/photo-1612670940073-8aed2145ebc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px){
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
