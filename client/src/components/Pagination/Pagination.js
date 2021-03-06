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
    <div className="pages">
      {pages.length > 1 ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : null}
    </div>
  );
}
