import React from "react";
import ArticleImage from "./ArticleImage";
import ArticleWrapper from "./styles";
import { Props } from "./types";

const ArticleComponent: React.FC<Props> = ({
  data,
  type = "normal",
  className,
  adjustment,
}) => {
  if (!data && type === "normal") {
    return null;
  }
  return (
    <ArticleWrapper className={className}>
      <ArticleImage data={data} type={type} adjustment={adjustment} />
      <div className="title-content">
        {type === "normal" && <h3 className="description">{data.text}</h3>}
      </div>
    </ArticleWrapper>
  );
};

export default ArticleComponent;
