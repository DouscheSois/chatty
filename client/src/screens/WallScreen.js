import React from "react";
import AllPosts from "./AllPosts";
import NewPost from "./NewPost";

import { Row, Col, Container } from "react-bootstrap";

const WallScreen = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <NewPost />
          <AllPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default WallScreen;
