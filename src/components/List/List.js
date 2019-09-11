import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
// Without a backend we can import the colors directly
// import colors from "./colors.json";
import Pagination from "../Pagination/Pagination";
import "./List.css";

export default function List() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const colorsPerPage = 12;

  // For now we fetch locally for colors, when an API endpoint is created we can fetch from server.
  useEffect(() => {
    (async function() {
      setLoading(true);
      let res = await fetch("colors.json");
      if (!res.ok) throw new Error("Failed to fetch");
      let json = await res.json();
      setColors(json);
      setLoading(false);
    })().catch(err => console.error(err));
  }, []);

  const indexOfLast = currentPage * colorsPerPage;
  const indexOfFirst = indexOfLast - colorsPerPage;
  const currentColors = colors.slice(indexOfFirst, indexOfLast);

  const paginate = page => setCurrentPage(page);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <section id="list-section">
        {currentColors.map(color => (
          <Card key={color.colorId} hexString={color.hexString} />
        ))}
      </section>
      <Pagination
        colorsPerPage={colorsPerPage}
        totalColors={colors.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
}
