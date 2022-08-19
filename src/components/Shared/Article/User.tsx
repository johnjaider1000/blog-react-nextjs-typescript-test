import moment from "moment";
import React from "react";
import { Article, Comment } from "../../../types";
import Image from "../Image";
import { UserWrapper } from "./styles";

interface Props {
  data: Article | Comment | undefined;
}

const UserComponent: React.FC<Props> = ({ data }) => {
  return (
    <UserWrapper>
      <Image src={data?.owner.picture} className="user-picture" />
      <span className="muted">por</span>
      <span className="username">
        {data?.owner.firstName} {data?.owner.lastName}
      </span>
    </UserWrapper>
  );
};
export default UserComponent;
