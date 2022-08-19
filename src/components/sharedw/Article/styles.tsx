import { styled } from "@mui/material";
import { RELATION_ASPECT, RELATION_ASPECT_ADJUSTMENT } from "./types";

export default styled("a")`
  cursor: pointer;
  grid-column: span 1;
  &.span-2 {
    grid-column: span 2;
    grid-row: span 2;
  }
  & .image-content {
    width: 100%;
    & .skeleton {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
    position: relative;
    & .image-article {
      padding-top: ${RELATION_ASPECT};
      position: relative;
      &.adjustment {
        padding-top: ${RELATION_ASPECT_ADJUSTMENT};
      }
    }
  }
  & .title-content {
    & .description {
      margin: 0;
      padding: 0;
      margin-top: 10px;
    }
  }

  & .info-content {
    @media (max-width: 900px) {
      &.banner {
        & .info-footer {
          display: none;
        }
      }
      & .info-footer {
        margin-top: 10px;
      }
      & .chip {
        visibility: hidden;
        display: none;
      }
      & .chip:nth-of-type(1) {
        visibility: visible;
        display: inline;
      }
    }
    & p {
      color: ${({ theme }) => theme.palette.common.black};
      margin: 0;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & .chip {
      margin-right: 6px;
      border-radius: 0;
      text-transform: uppercase;
      font-size: 0.8em;
      line-height: 0.8em;
      height: max-content;
      padding: 6px 12px;
    }
    & .date {
      color: ${({ theme }) => theme.palette.common.black};
      font-size: 0.8em;
      margin-left: 16px;
    }
    &.banner {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      padding: 25px;
      & p {
        color: ${({ theme }) => theme.palette.common.white};
      }
      & .date {
        color: ${({ theme }) => theme.palette.common.white};
      }
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.02)),
        color-stop(25%, rgba(0, 0, 0, 0.4))
      );
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.4) 25%
      );
      background: -o-linear-gradient(
        top,
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.4) 25%
      );
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.4) 25%
      );
    }
  }
`;

export const UserWrapper = styled("div")`
  display: flex;
  padding: 10px 0;
  align-items: center;
  margin-left: auto;
  & .user-picture {
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
  & .muted {
    color: ${({ theme }) => theme.palette.gray[600]};
    margin-right: 6px;
    font-weight: 300;
  }
  & .username {
    font-weight: 400;
  }
`;
