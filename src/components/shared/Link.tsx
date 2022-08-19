import LinkNext from "next/link";
import { ReactElement } from "react";

interface Props {
  href?: string;
  children?: ReactElement | ReactElement[];
}
const Link: React.FC<Props> = ({ href, children }) => {
  if (!href) {
    return <>{children}</>;
  }
  return <LinkNext href={href}>{children}</LinkNext>;
};

export default Link;
