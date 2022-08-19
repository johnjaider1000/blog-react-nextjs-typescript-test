import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useFecth = <T = any, D = any>(
  uri: string,
  params?: AxiosRequestConfig<D>
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<T>();

  useEffect(() => {
    setLoading(true);
    axios
      .get<T>(uri, params)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uri]);

  return { data, loading, error };
};

export default useFecth;
