import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const PostItem = ({ entry: { _id, name, text, date } }) => {
  useSelector((state) => state.auth);

  const newDate = dayjs(date).format("MMMM D @ h:mm A");

  return (
    <div className="post-item">
      <p>{text}</p>
      <div className="post-item-small">
        <small>{name}</small>
        <small>{newDate}</small>
      </div>
    </div>
  );
};

export default PostItem;
