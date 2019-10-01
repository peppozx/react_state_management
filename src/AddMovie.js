import React, { useState, useContext } from "react";
import uuid from "uuid";

import { MovieContext } from "./MovieContext";

export default function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const handleSubmit = e => {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        name: name,
        price: price,
        id: uuid.v4()
      }
    ]);
  };
  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
