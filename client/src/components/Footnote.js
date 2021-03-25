import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footnote = () => {
  return (
    <footer className="bg-dark py-4">
      <Container>
        <Row>
          <Col className="text-center my-4">
            <Navbar.Brand>
              Made by: <a href="https://www.douschesois.com/">Douschesois</a>
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Navbar.Text>Copyright &copy; 2021</Navbar.Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footnote;
