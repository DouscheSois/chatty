import React from "react";

import { Row, Col, Card, Jumbotron, Container } from "react-bootstrap";

import Mlk from "../media/mlk.jpeg";

const Landing = () => {
  return (
    <>
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container className="py-3 text-center">
              <Card.Img variant="top" src={Mlk} alt="King" />
              <Card.Body>
                <Card.Title>Martin Luther King Jr.</Card.Title>
                <Card.Text>
                  Chatty is a safe platform where users can speak freely with
                  complete privacy
                </Card.Text>
                <Card.Text>
                  Login, or create an account, and start sharing!
                </Card.Text>
              </Card.Body>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </>
  );
};

export default Landing;
