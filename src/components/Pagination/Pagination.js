import React from "react";

export default function Pagination({ totalColors, colorsPerPage, paginate }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalColors / colorsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pages.map(num => (
          <li key={num} className="page-num">
            <a onClick={() => paginate(num)} href="#0" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
