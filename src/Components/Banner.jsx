import { useEffect } from "react";
import { useState } from "react";
import requests from "../requests";
import axios from 'axios';
import "./all.scss"


const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) // get a random number
        ]
      )
      return request;
    }

    fetchData();

  }, [])


  const truncate = (string, n) => {
    return (string?.length > n) ? string.substr(0, n - 1) + "..." : string
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}>
      <div className="banner__contents">

            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner__buttons">
              <button>Play</button>
              <button>My List</button>
            </div>

            <h1 className="banner__desc">
              {
                truncate(movie?.overview, 150)
              }
            </h1>

      </div>

      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
