import { Container } from "@mui/material";
import React, { ReactElement } from "react";
import MenuArea from "./MenuArea";
import Navbar from "./Navbar";
import LayoutWrapperStyles from "./styles";
import TopBar from "./TopBar";

interface Props {
  children: ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapperStyles>
      <TopBar />
      <Navbar />
      <MenuArea />
      <Container className="layout-container">
        <main className="principal-main">{children}</main>
        <aside className="principal-aside"></aside>
      </Container>
    </LayoutWrapperStyles>
  );
};

export default Layout;
