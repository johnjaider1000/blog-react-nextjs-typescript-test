import { Article } from "../../../types";

export type ArticleType = "normal" | "skeleton" | "banner" | "skeleton-banner";

export type GridColumn = "span-1" | "span-2";

export interface Props {
  data?: Article;
  type?: ArticleType;
  className?: string;
  adjustment?: boolean;
  gridColumn?: GridColumn;
  showAllTags?: boolean;
}

export const RELATION_ASPECT = "64.6%";
export const RELATION_ASPECT_ADJUSTMENT = "65%";

export interface InfoProps {
  data?: Article;
  type: ArticleType;
  adjustment?: boolean;
  showAllTags?: boolean;
}
