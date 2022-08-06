/** @format */

import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Bar from "../components/Bar";
import styles from "../CSS/Home.module.css";

function Home() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
      });
  }, []);
  return (
    <div>
      <Bar />

      {movies == "" ? (
        "Loading..."
      ) : (
        <div className={styles.box}>
          {movies.map((movie) => (
            <Movies
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              mdImg={movie.medium_cover_image}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
