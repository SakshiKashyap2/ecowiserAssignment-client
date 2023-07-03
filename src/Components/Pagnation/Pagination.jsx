import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = (e) => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    e.preventDefault();
  };
  const prevPage = (e) => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    e.preventDefault();
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link text-warning" onClick={prevPage} href=" ">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage === pgNumber ? 'warning' : ''
            } `}
          >
            <a
              onClick={(e) => {
                setCurrentPage(pgNumber);
                e.preventDefault();
              }}
              className="page-link text-warning"
              href=" "
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link text-warning" onClick={nextPage} href=" ">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
