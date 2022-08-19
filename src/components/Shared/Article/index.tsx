import React from "react";
import { getProp } from "../../../utils/Extra";
import ArticleImage from "./ArticleImage";
import ArticleWrapper from "./styles";
import { Props } from "./types";

const ArticleComponent: React.FC<Props> = ({
  data,
  type = "normal",
  className,
  gridColumn,
  adjustment,
}) => {
  return (
    <ArticleWrapper className={`${className} ${gridColumn}`}>
      <ArticleImage data={data} type={type} adjustment={adjustment} />
      <div className="title-content">
        {type === "normal" && (
          <h3 className="description">
            {getProp(data, "text")} a{gridColumn}
          </h3>
        )}
      </div>
    </ArticleWrapper>
  );
};

export default ArticleComponent;
