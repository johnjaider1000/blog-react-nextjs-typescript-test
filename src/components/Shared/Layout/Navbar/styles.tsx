import { Button, styled } from "@mui/material";
import theme from "../../../../theme";

export const LogoContainer = styled("div")`
  display: flex;
  & .logo {
    width: 54px;
  }
  & .site-name {
    margin-left: 10px;
    font-size: 1.8em;
    & .app-title {
      display: block;
      line-height: 1em;
    }
    & .app-subtitle {
      display: block;
      margin-top: 4px;
      font-size: 0.5em;
      color: ${({ theme }) => theme.palette.gray[600]};
      font-weight: 100;
      text-transform: uppercase;
    }
  }
`;

export const SearchPanel = styled("form")`
  margin-left: auto;
  min-width: 300px;
  position: relative;
`;

export const SearchButton = styled(Button)`
  position: absolute;
  right: 4px;
  top: 4px;
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  padding: 4px !important;
`;

export default styled("nav")`
  background-color: ${theme.palette.common.white};
  box-shadow: 0px 2px 2px #f2f2f2;
  width: 100%;
  & .container {
    display: flex;
    align-items: center;
  }
`;
