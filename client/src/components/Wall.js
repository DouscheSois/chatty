import React from "react";

import AllPosts from "./AllPosts";
import NewPost from "./NewPost";

const Wall = () => {
  return (
    <div className="wall">
      <h2>
        Share a comment ...<i className="far fa-comment-alt fa-2x"></i>
      </h2>
      <NewPost />
      <AllPosts />
    </div>
  );
};

export default Wall;
