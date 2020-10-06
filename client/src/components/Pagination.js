import React from "react";

const Pagination = ({ limit, totalEntries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEntries / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
