import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={`/posts/${post._id}`}>
          <Card.Title as="div">
            <strong>{post.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <strong>{post.text}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
