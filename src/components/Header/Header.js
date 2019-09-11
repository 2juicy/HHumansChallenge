import React from "react";
import "./Header.css";

export default function Header() {
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
      <input className="search" label="Search" placeholder="Search" />
    </header>
  );
}
