import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footnote = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4 border-top">
            <h4>© 2020 - A douschesois creation</h4>
            <div className="footnote-links">
              <a href="https://www.douschesois.com/">Website</a>
              <a href="https://www.linkedin.com/in/roger-alexander-37925619a/">
                Linkedin
              </a>
              <a href="https://github.com/DouscheSois">Github</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footnote;
