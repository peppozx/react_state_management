import React, { useContext } from "react";
import "./Nav.css";

import { MovieContext } from "./MovieContext";

export default function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <div className="wrapper">
        <h3>Dev El</h3>
        <p>List of Movies: {movies.length}</p>
      </div>
    </div>
  );
}
