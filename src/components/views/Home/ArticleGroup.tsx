import { ArticleGroupWrapper } from "./styles";
import ArticleComponent from "../../shared/Article";
import React from "react";
import { Props } from "./types";
import { ArticleType } from "../../shared/Article/types";

const ArticleGroup: React.FC<Props> = ({ data, loading, type, start, end }) => {
  const getType = (): ArticleType => {
    switch (type) {
      case "banner":
      case "inverse":
        return loading ? "skeleton-banner" : "banner";
      default:
        return loading ? "skeleton" : "normal";
    }
  };

  const isPrincipal = (index: number) => {
    switch (type) {
      case "banner":
        return index === 0;
      case "inverse":
        return index === 1;
    }
  };
  return (
    <>
      <ArticleGroupWrapper>
        {(loading || !data) &&
          new Array(end)
            .fill(0)
            .map((item, index) => (
              <ArticleComponent
                key={index}
                type={getType()}
                gridColumn={isPrincipal(index) ? "span-2" : "span-1"}
                adjustment={isPrincipal(index)}
              />
            ))}
        {!loading &&
          data
            ?.splice(start, end)
            .map((item, index) => (
              <ArticleComponent
                data={item}
                type={getType()}
                key={index}
                gridColumn={isPrincipal(index) ? "span-2" : "span-1"}
                adjustment={isPrincipal(index)}
              />
            ))}
      </ArticleGroupWrapper>
    </>
  );
};

export default ArticleGroup;
