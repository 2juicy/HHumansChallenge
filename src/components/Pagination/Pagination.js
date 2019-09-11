import React from "react";

export default function Pagination({ totalCards, cardsPerPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pages.map(num => (
          <li key={num} className="page-num">
            <a href="#0" className="page-link">
              {num}
            </a>
          </li>
        ))}
        >
      </ul>
    </div>
  );
}
