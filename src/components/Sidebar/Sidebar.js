import React from "react";
import "./Sidebar.css";

export default function Sidebar({ random }) {
  return (
    <section className="sidebar">
      <div id="sidebar-logo">
        <a href="#0">
          <img
            alt="Helpful Humans"
            src={process.env.PUBLIC_URL + "/assets/blacklogo.png"}
          />
        </a>
      </div>
      <div className="random-button">
        <button onClick={random} className="random">
          Random Color
        </button>
      </div>
      <div className="flex">
        <a href="#0" className="colors">
          Red
        </a>
        <a href="#0" className="colors">
          Orange
        </a>
        <a href="#0" className="colors">
          Yellow
        </a>
        <a href="#0" className="colors">
          Green
        </a>
        <a href="#0" className="colors">
          Blue
        </a>
        <a href="#0" className="colors">
          Purple
        </a>
        <a href="#0" className="colors">
          Brown
        </a>
        <a href="#0" className="colors">
          Gray
        </a>
      </div>
    </section>
  );
}
