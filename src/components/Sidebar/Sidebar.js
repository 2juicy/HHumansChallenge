import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="random-button">
        <button className="random">Random Color</button>
      </div>
      <div className="flex">
        <a className="colors">Red</a>
        <a className="colors">Orange</a>
        <a className="colors">Yellow</a>
        <a className="colors">Green</a>
        <a className="colors">Blue</a>
        <a className="colors">Purple</a>
        <a className="colors">Brown</a>
        <a className="colors">Gray</a>
      </div>
    </section>
  );
}
