import React, { useState } from "react";
import "./Header.css";

export default function Header({ searchColor, invalid }) {
  const [value, setValue] = useState("");

  const keyPress = e => {
    if (e.keyCode === 13) {
      const color =
        e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1);
      searchColor(color);
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
        onChange={e => setValue(e.target.value)}
        onKeyDown={keyPress}
        className={(invalid ? "blink " : "") + "search"}
        label="Search"
        placeholder="Search"
      />
    </header>
  );
}
