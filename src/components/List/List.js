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
  const [colorsPerPage, setColorsPerPage] = useState(8);

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

  return (
    <section id="list-section">
      {colors.map(color => (
        <Card hexString={color.hexString} />
      ))}
    </section>
  );
}
