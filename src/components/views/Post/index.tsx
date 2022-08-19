import React from "react";
import { getProp, getRandomInt } from "../../../utils/Extra";
import Layout from "../../shared/Layout";
import PostWrapper, { CommentsContainer } from "./styles";
import ArticleComponent from "../../shared/Article/index";
import { Article, Comment, FetchResponse } from "../../../types/index";
import { Aside, PrincipalSection } from "../Home/styles";
import useGetListPost from "../../../hooks/useGetListPosts";
import SectionHeader from "../Home/SectionHeader";
import RssComponent from "../Home/Rss";
import CommentComponent from "../../shared/Comment";

interface Props {
  id: string;
  comments: FetchResponse<Array<Comment>>;
  post: Article;
}

const PostView: React.FC<Props> = ({ id, post, comments: commentData }) => {
  const { data, loading: loadingPost } = useGetListPost({
    page: 1,
    limit: 10,
  });

  return (
    <Layout title={getProp(post, "text")}>
      <PostWrapper>
        <PrincipalSection>
          <ArticleComponent
            className="principal-article"
            data={post}
            type={"normal"}
            showAllTags={true}
          />
          <SectionHeader
            title={`Comentarios (${getProp(commentData, "total", 0)})`}
          />
          <CommentsContainer>
            {commentData?.data.map((item, index) => (
              <CommentComponent data={item} key={index} />
            ))}
          </CommentsContainer>
        </PrincipalSection>
        <Aside className="aside-content">
          <div className="related-content">
            {loadingPost &&
              new Array(3)
                .fill(null)
                .map((item, index) => (
                  <ArticleComponent type="skeleton-banner" key={index} />
                ))}

            {!loadingPost &&
              [...(data?.data || [])]
                .filter((item) => item.id !== id)
                .splice(getRandomInt(5), 3)
                .map((item, index) => (
                  <ArticleComponent data={item} type="banner" key={index} />
                ))}
          </div>

          <SectionHeader title="Síganos" />
          <RssComponent />
        </Aside>
      </PostWrapper>
    </Layout>
  );
};

export default PostView;
