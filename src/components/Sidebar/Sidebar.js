import React from "react";
import "./Sidebar.css";

export default function Sidebar({ random, searchColor }) {
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
        <a onClick={() => searchColor("Red")} href="#0" className="colors">
          Red
        </a>
        <a onClick={() => searchColor("Orange")} href="#0" className="colors">
          Orange
        </a>
        <a onClick={() => searchColor("Yellow")} href="#0" className="colors">
          Yellow
        </a>
        <a onClick={() => searchColor("Green")} href="#0" className="colors">
          Green
        </a>
        <a onClick={() => searchColor("Blue")} href="#0" className="colors">
          Blue
        </a>
        <a onClick={() => searchColor("Purple")} href="#0" className="colors">
          Purple
        </a>
        <a onClick={() => searchColor("Brown")} href="#0" className="colors">
          Brown
        </a>
        <a onClick={() => searchColor("Gray")} href="#0" className="colors">
          Gray
        </a>
      </div>
    </section>
  );
}
