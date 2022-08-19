import { styled } from "@mui/material";

export default styled("section")`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.gray[100]};
  & .container {
    height: 100%;
  }
`;

export const List = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  display: flex;
`;

export const ListItem = styled("li")`
  height: 100%;
  padding: 6px;
  & a {
    display: flex;
    height: 100%;
    width: max-content;
    padding: 15px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.gray[800]};
    text-transform: uppercase;
    font-size: 0.9em;
    text-decoration: none;
  }
`;
