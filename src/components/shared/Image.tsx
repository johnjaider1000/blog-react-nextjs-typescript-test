import React from "react";
interface Props {
  src?: string | undefined;
  alt?: string;
  className?: string;
}

export const resolvePath = (src?: string): string | undefined => {
  if (!src) {
    return src;
  }
  if (src.startsWith("http")) {
    return src;
  }
  return `/static/${src}`;
};

const Image: React.FC<Props> = ({ src, alt, className }) => {
  if (!src) {
    return null;
  }
  const resolvedPath = resolvePath(src);
  return <img src={resolvedPath} alt={alt} className={className} />;
};

export default Image;
