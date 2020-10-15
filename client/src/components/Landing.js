import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button, Jumbotron, Container } from "react-bootstrap";

import Mlk from "../media/mlk.jpeg";

const Landing = () => {
  return (
    <>
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container className="py-3 text-center">
              <img src={Mlk} alt="King" />
              <h1>
                Chatty is a safe platform where users can speak freely with
                complete privacy
              </h1>
              <p>Login, or create an account, and start sharing!</p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </>
  );
};

export default Landing;
