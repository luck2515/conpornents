import React, { memo } from "react";
import styled from "styled-components";
import Head from "next/head";

interface Props {
  className?: string;
}
const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  height: 100px;
  background-color: #eee;
`;

const Main = styled.main`
  flex: 1;
  max-width: 960px;
  width: 100%;
  border: solid 1px #ccc;
  margin: 0 auto;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #eee;
`;
export default Layout;
