import React from "react";
import ArticleImage from "./ArticleImage";
import ArticleWrapper from "./styles";
import { Props } from "./types";
import ArticleInfo from "./ArticleInfo";
import Link from "../Link";

const ArticleComponent: React.FC<Props> = (props) => {
  let {
    data,
    type = "normal",
    className,
    gridColumn,
    adjustment,
    showAllTags,
  } = props;
  if (!data) {
    type = type === "normal" ? "skeleton" : "skeleton-banner";
  }

  return (
    <Link href={data ? `/post/${data?.id}` : undefined}>
      <ArticleWrapper
        className={`${className} ${gridColumn}`}
        sx={{ marginBottom: type === "normal" ? 5 : 0 }}
      >
        <ArticleImage data={data} type={type} adjustment={adjustment} />
        <div className="title-content">
          {type === "normal" && (
            <>
              <ArticleInfo data={data} type={type} showAllTags={showAllTags} />
            </>
          )}
        </div>
      </ArticleWrapper>
    </Link>
  );
};

export default ArticleComponent;
