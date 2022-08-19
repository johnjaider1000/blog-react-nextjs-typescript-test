import HomeWrapperStyles, { Aside, PrincipalSection } from "./styles";
import ArticleComponent from "../../shared/Article";
import { getProp } from "../../../utils/Extra";
import React from "react";
import { Props } from "./types";

const ArticleGroup: React.FC<Props> = ({ data, loading }) => {
  return (
    <HomeWrapperStyles>
      <PrincipalSection>
        <ArticleComponent
          data={getProp(data, "0")}
          type={loading ? "skeleton-banner" : "banner"}
          className="principal-article"
          adjustment={true}
        />
      </PrincipalSection>
      <Aside>
        <ArticleComponent
          data={getProp(data, "1")}
          type={loading ? "skeleton-banner" : "banner"}
        />
        <ArticleComponent
          data={getProp(data, "2")}
          type={loading ? "skeleton-banner" : "banner"}
        />
      </Aside>
    </HomeWrapperStyles>
  );
};

export default ArticleGroup;
