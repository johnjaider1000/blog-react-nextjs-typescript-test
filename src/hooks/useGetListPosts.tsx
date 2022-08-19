import { FetchResponse, Article } from "../types/index";
import useFecth from "./useFetch";

interface Props {
  page: number;
  limit: number;
}

const useGetListPost = ({ page, limit }: Props) => {
  const { data, loading, error } = useFecth<FetchResponse<Array<Article>>>(
    "post",
    {
      params: {
        page,
        limit,
      },
    }
  );

  return { loading, data, error };
};

export default useGetListPost;
