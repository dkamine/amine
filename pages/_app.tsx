import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-family: CircularStd,Helvetica,Arial,Segoe UI,Roboto,sans-serif;
    background-color: #f4f8fc;
    margin: 0 auto;
    padding: 0;
  }

  body {
    margin: 0;
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
