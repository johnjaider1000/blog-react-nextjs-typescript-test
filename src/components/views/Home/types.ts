import { Article } from "../../../types";

export interface Props {
  data: Array<Article> | undefined;
  loading: boolean;
}
