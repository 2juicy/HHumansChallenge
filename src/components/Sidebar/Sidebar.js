import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section id="sidebar">
      <button className="random">Random Color</button>
      <button className="colors">Red</button>
      <button className="colors">Orange</button>
      <button className="colors">Yellow</button>
      <button className="colors">Green</button>
      <button className="colors">Blue</button>
      <button className="colors">Purple</button>
      <button className="colors">Brown</button>
      <button className="colors">Gray</button>
    </section>
  );
}
