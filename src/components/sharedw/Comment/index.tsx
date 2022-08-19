import React from "react";
import { Comment } from "../../../types";
import { parseDate } from "../../../utils/Extra";
import UserComponent from "../Article/User";
import CommentWrapper from "./styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface Props {
  data: Comment;
}

const CommentComponent: React.FC<Props> = ({ data }) => {
  return (
    <CommentWrapper>
      <p className="description">{data?.message}</p>
      <div className="c-footer">
        <span className="date">
          <AccessTimeIcon className="icon" />
          {parseDate(data?.publishDate)}
        </span>
        <UserComponent data={data} />
      </div>
    </CommentWrapper>
  );
};

export default CommentComponent;
