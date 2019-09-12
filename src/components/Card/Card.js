import React from "react";
import "./Card.css";

export default function Card({ color, viewDetails }) {
  return (
    <div className="card">
      <div
        onClick={() => viewDetails(color.colorId)}
        className="card-color"
        style={{ backgroundColor: color.hexString }}
      ></div>
      <div className="card-text">
        <p>{color.hexString}</p>
      </div>
    </div>
  );
}
