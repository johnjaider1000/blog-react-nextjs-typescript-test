import { Article } from "../../../types";

export type ArticleType = "normal" | "skeleton" | "banner" | "skeleton-banner";

export interface Props {
  data: Article;
  type?: ArticleType;
  className?: string;
  adjustment?: boolean;
}

export const RELATION_ASPECT = "56.6%";
export const RELATION_ASPECT_ADJUSTMENT = "58%";
