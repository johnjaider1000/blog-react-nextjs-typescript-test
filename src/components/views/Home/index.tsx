import useGetListPost from "../../../hooks/useGetListPosts";
import Layout from "../../shared/Layout";
import HomeWrapperStyles, { Aside, PrincipalSection } from "./styles";
import ArticleGroup from "./ArticleGroup";
import SectionHeader from "./SectionHeader";
import RssComponent from "./Rss";

const HomeView = () => {
  const { loading, data } = useGetListPost({ page: 1, limit: 20 });
  return (
    <Layout>
      <ArticleGroup
        data={[...(data?.data || [])]}
        loading={loading}
        type="banner"
        start={0}
        end={3}
      />
      <HomeWrapperStyles>
        <PrincipalSection>
          <SectionHeader title="Últimas noticias" />
          <ArticleGroup
            data={[...(data?.data || [])]}
            loading={loading}
            type="extended"
            start={3}
            end={15}
          />
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
