import React from "react";

import AllPosts from "./AllPosts";
import NewPost from "./NewPost";

import { Row, Col, Container } from "react-bootstrap";

const Wall = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h2>
            Start Chatting ...<i className="far fa-comment-alt fa-2x"></i>
          </h2>
          <NewPost />
          <AllPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default Wall;
