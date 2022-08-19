import { Container } from "@mui/material";
import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "../Footer";
import { MobileContent, WebContent } from "../Responsive";
import MenuArea from "./MenuArea";
import Navbar from "./Navbar";
import LayoutWrapperStyles from "./styles";
import TopBar from "./TopBar";
import MobileMenuArea from "./MenuArea/Mobile";

interface Props {
  children: ReactElement | ReactElement[];
  title?: string;
}
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <LayoutWrapperStyles>
      <Head>
        <title>{title || "Bloggy"}</title>
      </Head>
      <WebContent>
        <TopBar />
        <Navbar />
        <MenuArea />
      </WebContent>
      <MobileContent>
        <MobileMenuArea />
      </MobileContent>
      <Container className="layout-container">
        <main className="principal-main">{children}</main>
      </Container>
      <Footer />
    </LayoutWrapperStyles>
  );
};

export default Layout;
