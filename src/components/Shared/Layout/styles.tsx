import { styled } from "@mui/material";

export default styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > .layout-container {
    display: flex;
    min-height: 100vh;
    /* background-color: yellow; */
    & .principal-main {
      width: calc(100% - 300px);
      /* background-color: green; */
      min-height: 100%;
    }
    & .principal-aside {
      width: 300px;
      /* background-color: red; */
      min-height: 100%;
    }
  }
`;
