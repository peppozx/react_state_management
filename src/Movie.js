import React from "react";

export default function Movie({ name, id, price }) {
  return (
    <div id={id}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
