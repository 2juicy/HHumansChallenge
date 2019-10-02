import React, { useState } from "react";
import "./Header.css";

export default function Header({ searchColor, invalid, filterInput }) {
  const [value, setValue] = useState("");

  const keyDown = e => {
    if (e.keyCode === 13) {
      searchColor(e.target.value.trim());
    }
  };

  return (
    <header id="header-component">
      <div className="logo">
        <a href="#0">
          <img
            alt="Helpful Humans"
            src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          />
        </a>
      </div>
      <input
        value={value}
        onFocus={() => {
          setValue("");
          filterInput("");
        }}
        onBlur={() => {
          setValue("");
          filterInput("");
        }}
        onChange={e => setValue(e.target.value)}
        onKeyDown={keyDown}
        onKeyUp={e => filterInput(e.target.value.trim())}
        className={(invalid ? "blink " : "") + "search"}
        label="Search"
        placeholder="Search/Filter"
      />
    </header>
  );
}
