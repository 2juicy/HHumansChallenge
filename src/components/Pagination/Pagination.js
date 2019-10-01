import React from "react";
import "./Pagination.css";

export default function Pagination({
  currentPage,
  totalColors,
  colorsPerPage,
  paginate
}) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalColors / colorsPerPage); i++) {
    pages.push(i);
  }

  return (
    <React.Fragment>
      {pages.length ? (
        <div className="pages">
          <a onClick={() => paginate(-1)} href="#0" className="page-link">
            &laquo;
          </a>

          {pages.map(num => (
            <a
              key={num}
              onClick={() => paginate(num)}
              href="#0"
              className={(currentPage === num ? "active " : "") + "page-link"}
            >
              {num}
            </a>
          ))}

          <a onClick={() => paginate(0)} href="#0" className="page-link">
            &raquo;
          </a>
        </div>
      ) : null}
    </React.Fragment>
  );
}
