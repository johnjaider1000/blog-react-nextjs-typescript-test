import { Chip, Skeleton } from "@mui/material";
import React from "react";
import { Article } from "../../../types";
import CubeImage from "../Extra/CubeImage";
import { ArticleType, RELATION_ASPECT } from "./types";
import moment from "moment";

interface Props {
  data?: Article;
  type: ArticleType;
  adjustment?: boolean;
}

const ArticleImage: React.FC<Props> = ({
  data: { image, text, tags = [], publishDate } = {},
  type,
  adjustment,
}) => {
  return (
    <div className="image-content">
      {type === "normal" ||
        (type === "banner" && (
          <CubeImage
            src={image}
            className={`image-article ${type} ${
              adjustment ? "adjustment" : ""
            }`}
          >
            {type === "banner" && (
              <div className="info-content">
                <p className="description">{text}</p>
                <div className="info-footer">
                  {tags.splice(-1).map((item, index) => (
                    <Chip
                      variant="filled"
                      color="primary"
                      key={index}
                      label={item}
                      className="chip"
                    />
                  ))}
                  <span className="date">
                    {moment(publishDate).format("ll")}
                  </span>
                </div>
              </div>
            )}
          </CubeImage>
        ))}
      {(type === "skeleton-banner" || type === "skeleton") && (
        <Skeleton
          className="img-article"
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: RELATION_ASPECT }}
        />
      )}
    </div>
  );
};

export default ArticleImage;
