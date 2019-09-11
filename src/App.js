import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";
import Detail from "./components/Detail/Detail";
// Without a backend we can import the colors directly
// import colors from "./colors.json";

export default function App() {
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

  return (
    <div>
      <Header />
      <Sidebar />
      <List colors={currentColors} loading={loading} />
      <Pagination
        colorsPerPage={colorsPerPage}
        totalColors={colors.length}
        paginate={paginate}
      />

      {/* <Detail /> */}
    </div>
  );
}
