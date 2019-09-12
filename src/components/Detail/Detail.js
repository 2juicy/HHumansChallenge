import React from "react";
import "./Detail.css";
import Card from "../Card/Card";

export default function Detail({ detail, colors, viewDetails, clear }) {
  return (
    <div id="detail">
      <Card color={detail} details={viewDetails} />
      <div className="flex-detail">
        {colors.map(color => (
          <Card key={color.colorId} color={color} viewDetails={viewDetails} />
        ))}
      </div>
      <div className="clear-button">
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
