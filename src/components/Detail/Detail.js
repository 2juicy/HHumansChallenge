import React from "react";
import "./Detail.css";
import Card from "../Card/Card";

export default function Detail({ detailColor, colors, details, clear }) {
  return (
    <div id="detail">
      <Card color={detailColor} details={details} />
      <div className="flex-detail">
        {colors.map(color => (
          <Card key={color.colorId} color={color} details={details} />
        ))}
      </div>
      <div className="clear-button">
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
