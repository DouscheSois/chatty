import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <>
      <h1>
        <strong>{post.name}</strong>
      </h1>

      <h1>
        <strong>{post.text}</strong>
      </h1>
    </>
  );
};

export default Post;
