import useFecth from "./useFetch";
import { Comment, FetchResponse } from "../types/index";
interface Props {
  postId: string;
}

const useGetListcomments = ({ postId }: Props) => {
  if (postId == null) {
    return { error: Error("posdId no válido.") };
  }
  const { data, loading, error } = useFecth<FetchResponse<Array<Comment>>>(
    `/post/${postId}/comment`
  );
  return { loading, data, error };
};

export default useGetListcomments;
