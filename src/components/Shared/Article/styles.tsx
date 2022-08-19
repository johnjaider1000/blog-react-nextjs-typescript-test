import { styled } from "@mui/material";
import { RELATION_ASPECT, RELATION_ASPECT_ADJUSTMENT } from "./types";

export default styled("article")`
  margin-bottom: 10px;
  cursor: pointer;
  & .image-content {
    width: 100%;
    & .image-article {
      &.banner {
        padding-top: ${RELATION_ASPECT};
        position: relative;
        & .info-content {
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          padding: 25px;
          & p {
            color: white;
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
            color: ${({ theme }) => theme.palette.common.white};
            font-size: 0.8em;
            margin-left: 16px;
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
      &.adjustment {
        padding-top: ${RELATION_ASPECT_ADJUSTMENT};
      }
    }
  }
`;
