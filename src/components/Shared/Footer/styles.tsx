import { styled } from "@mui/material";

const FooterWrapper = styled("footer")`
  background-color: ${({ theme }) => theme.palette.gray[900]};
  display: flex;
  align-items: center;
  padding: 25px;
  color: ${({ theme }) => theme.palette.common.white};
  & a {
    color: ${({ theme }) => theme.palette.primary.main} !important;
    margin-left: 5px;
  }
  & .icon {
    color: ${({ theme }) => theme.palette.primary.main};
    transform: translateY(6px);
  }
`;

export default FooterWrapper;
