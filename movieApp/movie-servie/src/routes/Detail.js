/** @format */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../CSS/Detail.module.css";
import Bar from "../components/Bar";

function Detail() {
  const { id } = useParams();
  const [thisMovie, setThismovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setThismovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.test}>
      <Bar />
      {thisMovie == "" ? null : (
        <div className={styles.card}>
          <img src={thisMovie.large_cover_image}></img>
          <p className={styles.title}>{thisMovie.title_long}</p>
          <p className={styles.rate}>⭐️ {thisMovie.rating}</p>
          <p className={styles.sum}>{thisMovie.description_full}</p>
          <button className={styles.btn}>
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
