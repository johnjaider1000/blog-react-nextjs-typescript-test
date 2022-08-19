import { Container } from "@mui/material";
import React, { ReactElement } from "react";
import MenuArea from "./MenuArea";
import Navbar from "./Navbar";
import LayoutWrapperStyles from "./styles";
import TopBar from "./TopBar";

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapperStyles>
      <TopBar />
      <Navbar />
      <MenuArea />
      <Container className="layout-container">
        <main className="principal-main">{children}</main>
      </Container>
    </LayoutWrapperStyles>
  );
};

export default Layout;
