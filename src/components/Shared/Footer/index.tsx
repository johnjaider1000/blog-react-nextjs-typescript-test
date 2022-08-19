import { GitHub } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Container } from "@mui/material";
import FooterWrapper from "./styles";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <span>
          Copyright © 2021 | Creado por <GitHub className="icon" />
        </span>
        <a href="https://github.com/johnjaider1000" target="_blank">
          johnjaider1000
        </a>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
