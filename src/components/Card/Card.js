import React from "react";
import "./Card.css";

export default function Card({ color, details }) {
  return (
    <div onClick={() => details(color.colorId)} className="card">
      <div
        className="card-color"
        style={{ backgroundColor: color.hexString }}
      ></div>
      <div className="card-text">
        <p>{color.hexString}</p>
      </div>
    </div>
  );
}
