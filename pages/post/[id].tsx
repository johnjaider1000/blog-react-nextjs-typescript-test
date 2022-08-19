import PostView from "../../src/components/views/Post/index";
import axios, { AxiosResponse } from "axios";
import { Article, FetchResponse } from "../../src/types/index";
import { getProp } from "../../src/utils/Extra";
import React from "react";
interface Props {
  post: Article;
  id: string;
}
const PostPage: React.FC<Props> = ({ post, id }) => {
  return (
    <>
      <PostView id={id} post={post} />
    </>
  );
};

export async function getStaticProps(context: any) {
  const id = getProp(context, "params.id");
  const result: AxiosResponse<Article> = await axios.get<Article>(`post/${id}`);
  return { props: { post: result?.data, id } };
}

export const getStaticPaths = async () => {
  const result: AxiosResponse<FetchResponse<Array<Article>>> = await axios.get<
    FetchResponse<Array<Article>>
  >(`post`, { params: { page: 1, limit: 20 } });
  const paths = result?.data?.data.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
