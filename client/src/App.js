import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";
import Detail from "./components/Detail/Detail";

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

  useEffect(() => {
    (async function() {
      setLoading(true);
      let res = await fetch("/api/colors");
      if (!res.ok) throw new Error("Failed to fetch");
      let json = await res.json();
      console.log(json[0]);
      setColors(json);
      setFilter(json);
      setLoading(false);
    })().catch(err => console.error(err));
  }, []);

  const indexOfLast = currentPage * colorsPerPage;
  const indexOfFirst = indexOfLast - colorsPerPage;
  const currentColors = filteredColors.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    if (
      currentPage > Math.ceil(filteredColors.length / colorsPerPage) &&
      currentPage !== 1
    ) {
      setCurrentPage(Math.ceil(filteredColors.length / colorsPerPage));
    }
  }, [filteredColors, currentPage]);

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
