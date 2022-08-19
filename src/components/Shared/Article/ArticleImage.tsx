import { Skeleton } from "@mui/material";
import React from "react";
import CubeImage from "../Extra/CubeImage";
import { RELATION_ASPECT, InfoProps } from "./types";
import ArticleInfo from "./ArticleInfo";

const ArticleImage: React.FC<InfoProps> = (props) => {
  const { data: { image } = {}, type, adjustment } = props;
  return (
    <div className="image-content">
      <CubeImage
        src={image}
        className={`image-article ${type} ${adjustment ? "adjustment" : ""}`}
      >
        {type === "banner" && <ArticleInfo {...props} />}
      </CubeImage>
      {(type === "skeleton-banner" || type === "skeleton") && (
        <Skeleton
          className="img-article skeleton"
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: RELATION_ASPECT }}
        />
      )}
    </div>
  );
};

export default ArticleImage;
