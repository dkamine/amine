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
    </Head>
    <ContentWrapper>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          | <a href="/api/positions">API</a>
        </nav>
      </header>
      {children}
    </ContentWrapper>
  </>
);

const ContentWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  max-width: 992px;
  padding: 1rem;
  margin: 0 auto;
`;

export default Layout;
