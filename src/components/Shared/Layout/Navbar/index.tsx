import { Container } from "@mui/material";
import Input from "../../Forms/Input";
import Image from "../../Image";
import NavbarWrapper, {
  LogoContainer,
  SearchButton,
  SearchPanel,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container className="container">
        <LogoContainer>
          <Image src="img/logo.svg" alt="Logo" className="logo" />
          <h1 className="site-name">
            <span className="app-title">Bloggy</span>
            <span className="app-subtitle">Test Semana</span>
          </h1>
        </LogoContainer>
        <SearchPanel>
          <Input placeholder="Buscar aquí" label="Buscar aquí" required={true} />
          <SearchButton variant="contained" color="primary" type="submit">
            <SearchIcon />
          </SearchButton>
        </SearchPanel>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
