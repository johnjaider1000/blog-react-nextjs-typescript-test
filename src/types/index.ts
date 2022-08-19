export interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface Article {
  id: string;
  image: string;
  likes: number;
  tags: Array<string>;
  text: string;
  publishDate: string;
  owner: Owner;
}

export interface Comment {
  id: string;
  message: string;
  owner: Owner;
  post: string;
  publishDate: string;
}

export interface FetchResponse<T = never> {
  data: T;
  total: number;
  page: number;
  limit: number;
}
