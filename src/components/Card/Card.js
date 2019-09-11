import React from "react";
import "./Card.css";

export default function Card({ hexString }) {
  return (
    <div className="card">
      <div className="card-color" style={{ backgroundColor: hexString }}></div>
      <div className="card-text">
        <p>{hexString}</p>
      </div>
    </div>
  );
}
