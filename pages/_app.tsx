import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-family:Verdana;
    background-color: #f4f8fc;
    margin: 0 auto;
    padding: 0;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
