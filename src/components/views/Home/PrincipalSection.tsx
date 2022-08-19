import HomeWrapperStyles, { Aside, PrincipalSection } from "./styles";
import ArticleComponent from "../../shared/Article";
import useGetListPost from "../../../hooks/useGetListPosts";
import { getProp } from "../../../utils/Extra";

const PrincipalSectionComponent = () => {
  const { loading, data } = useGetListPost({ page: 1, limit: 3 });

  if (
    loading === false &&
    Array.isArray(data?.data) &&
    data?.data.length == 0
  ) {
    return null;
  }

  return (
    <HomeWrapperStyles>
      <PrincipalSection>
        <ArticleComponent
          data={getProp(data?.data, "0")}
          type={loading ? "skeleton-banner" : "banner"}
          className="principal-article"
          adjustment={true}
        />
      </PrincipalSection>
      <Aside>
        <ArticleComponent
          data={getProp(data?.data, "1")}
          type={loading ? "skeleton-banner" : "banner"}
        />
        <ArticleComponent
          data={getProp(data?.data, "2")}
          type={loading ? "skeleton-banner" : "banner"}
        />
      </Aside>
    </HomeWrapperStyles>
  );
};

export default PrincipalSectionComponent;
