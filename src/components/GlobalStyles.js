import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, sans-serif;
    transition: all 0.530s linear;
  }

  .country {
    background: ${({ theme }) => theme.cardBackground};
  }

  input {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  nav {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  `
