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
  const [showDetail, setShowDetail] = useState(false);
  const [detailColor, setDetailColor] = useState();
  const [detailColors, setDetailColors] = useState([]);
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

  // Functions for event handling
  const paginate = page => setCurrentPage(page);
  const randomColor = () => {
    setShowDetail(true);
    const randomize = Math.floor(Math.random() * colors.length);
    setDetailColor(colors[randomize]);
    setDetailColors(colors.slice(randomize + 1, randomize + 6));
  };
  const details = colorId => {
    setShowDetail(true);
    setDetailColor(colors[colorId]);
    setDetailColors(colors.slice(colorId + 1, colorId + 6));
  };
  const clearDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <Header />
      <Sidebar random={randomColor} />
      {!showDetail ? (
        <React.Fragment>
          <List colors={currentColors} loading={loading} details={details} />
          <Pagination
            colorsPerPage={colorsPerPage}
            totalColors={colors.length}
            paginate={paginate}
          />
        </React.Fragment>
      ) : (
        <Detail
          detailColor={detailColor}
          colors={detailColors}
          details={details}
          clear={clearDetail}
        />
      )}
    </div>
  );
}
