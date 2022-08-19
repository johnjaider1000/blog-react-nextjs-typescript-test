import useGetListPost from "../../../hooks/useGetListPosts";
import Layout from "../../shared/Layout";
import HomeWrapperStyles, { Aside, PrincipalSection } from "./styles";
import ArticleGroup from "./ArticleGroup";
import SectionHeader from "./SectionHeader";
import RssComponent from "./Rss";

const HomeView = () => {
  const { loading, data } = useGetListPost({ page: 1, limit: 20 });

  if (
    loading === false &&
    Array.isArray(data?.data) &&
    data?.data.length == 0
  ) {
    return null;
  }
  return (
    <Layout>
      <ArticleGroup data={data?.data.splice(0, 3)} loading={loading} />
      <HomeWrapperStyles>
        <PrincipalSection>
          <SectionHeader title="Últimas noticias" />
        </PrincipalSection>
        <Aside>
          <SectionHeader title="Síganos" />
          <RssComponent />
        </Aside>
      </HomeWrapperStyles>
    </Layout>
  );
};

export default HomeView;
