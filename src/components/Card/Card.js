import React from "react";
import "./Card.css";

export default function Card({ color, details }) {
  return (
    <div className="card">
      <div
        onClick={() => details(color.colorId)}
        className="card-color"
        style={{ backgroundColor: color.hexString }}
      ></div>
      <div className="card-text">
        <p>{color.hexString}</p>
      </div>
    </div>
  );
}
