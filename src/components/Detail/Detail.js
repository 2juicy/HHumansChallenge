import React from "react";
import "./Detail.css";
import Card from "../Card/Card";

export default function Detail({ colors, details }) {
  return (
    <div id="detail">
      <Card color={colors[0]} details={details} />
      <div className="flex-detail">
        {colors.map(color => (
          <Card key={color.colorId} color={color} details={details} />
        ))}
      </div>
      <div className="clear-button">
        <button>Clear</button>
      </div>
    </div>
  );
}
