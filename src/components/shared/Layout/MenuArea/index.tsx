import { Container } from "@mui/material";
import Link from "next/link";
import MenuAreaWrapper, { List, ListItem } from "./styles";

interface MenuItem {
  href: string;
  label: string;
}

const MenuArea = () => {
  return (
    <MenuAreaWrapper>
      <Container className="container">
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </MenuAreaWrapper>
  );
};

export default MenuArea;

const list: Array<MenuItem> = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Páginas",
    href: "/",
  },
  {
    label: "Vídeos",
    href: "/",
  },
  {
    label: "Negocios",
    href: "/",
  },
  {
    label: "Cursos",
    href: "/",
  },
  {
    label: "Noticias",
    href: "/",
  },
];
