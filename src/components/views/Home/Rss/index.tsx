import { Google, LinkedIn, YouTube } from "@mui/icons-material";
import Facebook from "@mui/icons-material/Facebook";
import RssFeed from "@mui/icons-material/RssFeed";
import Twitter from "@mui/icons-material/Twitter";
import RssWrapper, { RssItem } from "./styles";

const RssComponent = () => {
  return (
    <RssWrapper>
      <RssItem className="facebook">
        <Facebook className="icon" />
      </RssItem>
      <RssItem className="twitter">
        <Twitter className="icon" />
      </RssItem>
      <RssItem className="rss">
        <RssFeed className="icon" />
      </RssItem>
      <RssItem className="in">
        <LinkedIn className="icon" />
      </RssItem>
      <RssItem className="google-plus">
        <Google className="icon" />
      </RssItem>
      <RssItem className="youtube">
        <YouTube className="icon" />
      </RssItem>
    </RssWrapper>
  );
};

export default RssComponent;
