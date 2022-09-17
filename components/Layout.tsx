import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
    </Head>
    <ContentWrapper>
      <header>
        <Nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <a href="/api/positions">API</a>
        </Nav>
      </header>
      {children}
    </ContentWrapper>
  </>
);

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  max-width: 992px;
  padding: 1rem;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;

  > a {
    color: #6f7589;
    text-decoration: none;
  }
`;

export default Layout;
