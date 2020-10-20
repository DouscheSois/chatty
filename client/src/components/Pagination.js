import React from "react";

import { Row, Col } from "react-bootstrap";

const Pagination = ({ limit, totalEntries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEntries / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Row>
        <Col className="page-col">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={(e) => paginate(number, e)}
                href="!#"
                className="page-link bg-primary"
              >
                {number}
              </a>
            </li>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Pagination;
