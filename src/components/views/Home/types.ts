import { Article } from "../../../types";

type GroupType = "inverse" | "compact" | "extended" | "banner";

export interface Props {
  data: Array<Article> | undefined;
  loading: boolean;
  type?: GroupType;
  start: number;
  end: number;
}
