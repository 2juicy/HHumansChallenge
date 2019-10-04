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
  const [filteredColors, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [details, setDetails] = useState();
  const [detailColors, setDetailColors] = useState([]);
  const [invalid, setInvalid] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  const colorsPerPage = 12;

  // For now we fetch locally for colors, when an API endpoint is created we can fetch from server.
  useEffect(() => {
    (async function() {
      setLoading(true);
      let res = await fetch("colors.json");
      if (!res.ok) throw new Error("Failed to fetch");
      let json = await res.json();
      setColors(json);
      setFilter(json);
      setLoading(false);
    })().catch(err => console.error(err));
  }, []);

  const indexOfLast = currentPage * colorsPerPage;
  const indexOfFirst = indexOfLast - colorsPerPage;
  const [currentColors, setCurrentColors] = useState(
    filteredColors.slice(indexOfFirst, indexOfLast)
  );

  useEffect(() => {
    setCurrentColors(filteredColors.slice(indexOfFirst, indexOfLast));
    if (currentPage > Math.ceil(filteredColors.length / colorsPerPage)) {
      setCurrentPage(Math.ceil(filteredColors.length / colorsPerPage));
    }
    return () => {
      if (currentPage === 0) setCurrentPage(1);
    };
  }, [filteredColors, currentPage, indexOfFirst, indexOfLast]);

  // Functions for event handling
  const paginate = page => {
    if (page > 0) {
      setCurrentPage(page);
    } else if (
      page === 0 &&
      currentPage < Math.ceil(filteredColors.length / colorsPerPage)
    ) {
      setCurrentPage(++currentPage);
    } else if (page === -1 && currentPage > 1) {
      setCurrentPage(--currentPage);
    }
  };

  const randomColor = () => {
    setShowDetail(true);
    const randomize = Math.floor(Math.random() * colors.length);
    setDetails(colors[randomize]);
    setDetailColors(colors.slice(randomize + 1, randomize + 6));
  };

  const viewDetails = colorId => {
    setShowDetail(true);
    setDetails(colors[colorId]);
    if (colorId + 6 > colors.length) {
      setDetailColors(colors.slice(colorId - 6, colorId - 1));
    } else {
      setDetailColors(colors.slice(colorId + 1, colorId + 6));
    }
  };

  const searchColor = input => {
    const index = colors.findIndex(
      color =>
        color.name.toLowerCase().replace(/\s/g, "") ===
        input.toLowerCase().replace(/\s/g, "")
    );
    if (index > -1) {
      viewDetails(index);
    } else {
      if (!invalid) {
        setInvalid(true);
        setTimeout(() => {
          setInvalid(false);
        }, 3000);
      }
    }
  };

  const filterInput = input => {
    let newColors = [];
    colors.forEach(color => {
      if (
        color.name
          .toLowerCase()
          .replace(/\s/g, "")
          .indexOf(input.toLowerCase().replace(/\s/g, "")) > -1
      ) {
        newColors.push(color);
      }
    });
    setFilter(newColors);
  };

  return (
    <div>
      <Header
        filterInput={filterInput}
        searchColor={searchColor}
        invalid={invalid}
      />
      <Sidebar random={randomColor} searchColor={searchColor} />
      {!showDetail ? (
        <React.Fragment>
          <List
            colors={currentColors}
            loading={loading}
            viewDetails={viewDetails}
          />
          <Pagination
            currentPage={currentPage}
            colorsPerPage={colorsPerPage}
            totalColors={filteredColors.length}
            paginate={paginate}
          />
        </React.Fragment>
      ) : (
        <Detail
          detail={details}
          colors={detailColors}
          viewDetails={viewDetails}
          clear={() => setShowDetail(false)}
        />
      )}
    </div>
  );
}
