import { styled } from "@mui/material";

const RssWrapper = styled("div")`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

export const RssItem = styled("div")`
  background-color: ${({ theme }) => theme.palette.common.black};
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  & .icon {
    position: absolute;
    color: ${({ theme }) => theme.palette.common.white};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
  }
  &.facebook {
    background-color: #4c66a3;
  }
  &.twitter {
    background-color: #2fc2ee;
  }
  &.rss {
    background-color: #ff680e;
  }
  &.in {
    background-color: #1076a8;
  }
  &.google-plus {
    background-color: #cf3e28;
  }
  &.youtube {
    background-color: #e42b27;
  }
`;

export default RssWrapper;
