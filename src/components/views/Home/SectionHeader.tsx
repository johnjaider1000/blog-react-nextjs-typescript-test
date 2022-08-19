import React from "react";
import { SectionHeaderWrapper } from "./styles";

interface Props {
  title: string;
}
const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <SectionHeaderWrapper>
      <h5>{title}</h5>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
