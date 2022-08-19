import { styled } from "@mui/material";

export default styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > .layout-container {
    display: flex;
    min-height: 100vh;
    & > .principal-main {
      width: 100%;
    }
  }
`;
