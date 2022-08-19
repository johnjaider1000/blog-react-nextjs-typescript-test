import React from "react";
import { getProp, getRandomInt } from "../../../utils/Extra";
import Layout from "../../shared/Layout";
import PostWrapper, { CommentsContainer } from "./styles";
import ArticleComponent from "../../shared/Article/index";
import { Article } from "../../../types/index";
import { Aside, PrincipalSection } from "../Home/styles";
import useGetListPost from "../../../hooks/useGetListPosts";
import SectionHeader from "../Home/SectionHeader";
import RssComponent from "../Home/Rss";
import useGetListcomments from "../../../hooks/useGetListComments";
import CommentComponent from "../../shared/Comment";

interface Props {
  id: string;
  post: Article;
}

const PostView: React.FC<Props> = ({ id, post }) => {
  const { data: commentData } = useGetListcomments({
    postId: id,
  });
  const { data } = useGetListPost({
    page: 1,
    limit: 10,
  });

  return (
    <Layout title={getProp(post, "text")}>
      <PostWrapper>
        <PrincipalSection>
          <ArticleComponent data={post} type={"normal"} showAllTags={true} />
          <SectionHeader title={`Comentarios (${commentData?.total})`} />
          <CommentsContainer>
            {commentData?.data.map((item, index) => (
              <CommentComponent data={item} key={index} />
            ))}
          </CommentsContainer>
        </PrincipalSection>
        <Aside className="aside-content">
          <div className="related-content">
            {[...(data?.data || [])]
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
