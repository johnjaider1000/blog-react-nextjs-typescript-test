import useFecth from "./useFetch";
import { FetchResponse, Article } from "../types/index";
const useGetPostById = (id: string) => {
  const { data, loading, error } = useFecth<FetchResponse<Article>>(
    `post/${id}`
  );

  return { loading, data, error };
};
export default useGetPostById;
