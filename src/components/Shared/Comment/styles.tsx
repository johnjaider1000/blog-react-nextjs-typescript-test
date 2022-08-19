import { styled } from "@mui/material";

const CommentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.gray[100]};
  padding: 10px;
  border-radius: 10px;
  & p {
    margin: 0;
    padding: 0;
  }
  & .c-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & .date {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.palette.gray[600]};
      font-size: 0.9em;
      & .icon {
        margin-right: 5px;
        font-size: 1em;
      }
    }
  }
`;
export default CommentWrapper;
