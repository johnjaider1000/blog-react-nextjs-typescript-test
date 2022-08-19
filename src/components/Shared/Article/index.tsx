import React from "react";
import CubeImage from "../Extra/CubeImage";
import ArticleWrapper from "./styles";

interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface Article {
  id: string;
  image: string;
  likes: number;
  tags: Array<string>;
  text: string;
  publishDate: string;
  owner: Owner;
}

interface Props {
  data: Article;
}

const Article: React.FC<Props> = ({ data: { image, text } }) => {
  return (
    <ArticleWrapper>
      <div className="image-content">
        <CubeImage src={image} className="image-article" />
      </div>
      <div className="title-content">
        <h3 className="description">{text}</h3>
      </div>
    </ArticleWrapper>
  );
};

export default Article;
