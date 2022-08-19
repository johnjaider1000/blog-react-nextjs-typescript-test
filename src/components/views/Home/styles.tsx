import { styled } from "@mui/material";

export default styled("section")`
  display: flex;
  width: 100%;
  padding-top: 10px;
`;
export const ArticleGroupWrapper = styled("div")`
  margin-top: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PrincipalSection = styled("section")`
  width: 66%;
  &.compact {
    width: 50%;
  }
`;

export const Aside = styled("aside")`
  width: 34%;
  padding-left: 10px;
  &.compact {
    width: 50%;
  }
`;

export const SectionHeaderWrapper = styled("section")`
  & h5 {
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
    position: relative;
    width: max-content;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      height: 1px;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  padding: 6px 0;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.gray[200]};
  }
`;
