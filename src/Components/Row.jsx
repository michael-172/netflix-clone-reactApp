import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requset = await axios.get(fetchUrl);
      setMovies(requset.data.results);
      return requset;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
      {movies.map((m, idx) => (
        <img
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path}`}
          alt={m.name}
          key={idx}
        />
      ))}
      </div>
    </div>
  );
};

export default Row;
