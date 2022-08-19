import { styled } from "@mui/material";

export const ListTopBar = styled("ul")`
  padding: 0;
  margin: 0;
  height: 45px;
  display: flex;
  justify-items: center;
  list-style: none;
`;

export const ListItem = styled("li")`
  display: flex;
  align-items: center;
  margin-right: 15px;
  & .label,
  & .icon {
    color: ${({ theme }) => theme.palette.gray[600]};
    font-size: 1em;
  }
  & .label {
    font-size: 0.9em;
    line-height: 1em;
    margin-left: 6px;
  }
  & a {
    cursor: pointer;
    &:hover,
    &:hover > .icon {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const RightItems = styled("div")`
  margin-left: auto;
  display: flex;
`;

export default styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray[200]};
`;
