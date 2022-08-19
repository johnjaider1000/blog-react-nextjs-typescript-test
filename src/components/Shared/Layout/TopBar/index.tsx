import { Container } from "@mui/material";
import TopBarWrapper, { ListTopBar, ListItem } from "./styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { RightItems } from "./styles";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Container>
        <ListTopBar>
          <ListItem>
            <CalendarMonthIcon className="icon" />
            <span className="label">2022-08-19</span>
          </ListItem>
          <ListItem>
            <WbCloudyIcon className="icon" />
            <span className="label">2022-08-19</span>
          </ListItem>
          <ListItem>
            <a className="label">Escríbenos</a>
          </ListItem>
          <ListItem>
            <a className="label">Nosotros</a>
          </ListItem>
          <ListItem>
            <a className="label">Contacto</a>
          </ListItem>
          <RightItems>
            <ListItem className="to-right">
              <a>
                <FacebookIcon className="icon" />
              </a>
            </ListItem>
            <ListItem className="to-right">
              <a href="">
                <TwitterIcon className="icon" />
              </a>
            </ListItem>
            <ListItem className="to-right">
              <a href="">
                <GoogleIcon className="icon" />
              </a>
            </ListItem>
            <ListItem className="to-right">
              <a href="">
                <InstagramIcon className="icon" />
              </a>
            </ListItem>
            <ListItem className="to-right">
              <a href="">
                <RssFeedIcon className="icon" />
              </a>
            </ListItem>
          </RightItems>
        </ListTopBar>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar;
