import React from "react";
import "./Detail.css";
import Card from "../Card/Card";

export default function Detail() {
  return (
    <div id="detail">
      <Card />
      <div className="flex-detail">
        <Card />
      </div>
      <div className="clear-button">
        <button>Clear</button>
      </div>
    </div>
  );
}
