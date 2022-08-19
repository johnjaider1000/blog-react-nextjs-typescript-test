import { Chip } from "@mui/material";
import moment from "moment";
import { parseDate } from "../../../utils/Extra";
import { InfoProps } from "./types";
import UserComponent from "./User";

const ArticleInfo: React.FC<InfoProps> = ({ data, type, showAllTags }) => {
  const getData = () => {
    const tags = showAllTags ? data?.tags : data?.tags.splice(-1);
    return Array.isArray(tags) ? [...tags] : [];
  };
  return (
    <div className={`info-content ${type}`}>
      <p className="description">{data?.text}</p>
      <div className="info-footer">
        {getData().map((item, index) => (
          <Chip
            variant="filled"
            color="primary"
            key={index}
            label={item}
            className="chip"
          />
        ))}
        <span className="date">{parseDate(data?.publishDate)}</span>
      </div>
      {type !== "banner" && <UserComponent data={data} />}
    </div>
  );
};

export default ArticleInfo;
