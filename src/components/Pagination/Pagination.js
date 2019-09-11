import React from "react";
import "./Pagination.css";

export default function Pagination({ totalColors, colorsPerPage, paginate }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalColors / colorsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pages">
      <a href="#0" className="page-link">
        &laquo;
      </a>

      {pages.map(num => (
        <a
          key={num}
          onClick={() => paginate(num)}
          href="#0"
          className="page-link"
        >
          {num}
        </a>
      ))}

      <a href="#0" className="page-link">
        &raquo;
      </a>
    </div>
  );
}
