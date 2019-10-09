import React from "react";
import Card from "../Card/Card";
import "./List.css";

export default function List({ colors, loading, viewDetails }) {
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <section id="list-section">
      {colors.length ? (
        colors.map(color => (
          <Card key={color.colorId} color={color} viewDetails={viewDetails} />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No results...</h1>
      )}
    </section>
  );
}
