import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import { Jumbotron, Container, Card } from "react-bootstrap";

const PostItem = ({ entry: { _id, name, text, date } }) => {
  useSelector((state) => state.auth);

  const newDate = dayjs(date).format("MMMM D @ h:mm A");

  return (
    <Jumbotron className="post-item">
      <Container>
        <h4>{name}</h4>
        <Card.Text>{text}</Card.Text>
        <small>{newDate}</small>
      </Container>
    </Jumbotron>
  );
};

export default PostItem;
