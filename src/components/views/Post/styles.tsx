import { styled } from "@mui/material";

const PostWrapper = styled("div")`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  & .aside-content {
    padding-bottom: 10px;
    & .related-content {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 15px;
    }
  }
`;

export const CommentsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;

export default PostWrapper;
