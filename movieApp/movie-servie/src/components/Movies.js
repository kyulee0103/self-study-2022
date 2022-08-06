/** @format */
import { Link } from "react-router-dom";
import styles from "../CSS/Movies.module.css";

function Movies({ id, title, summary, mdImg, rating }) {
  return (
    <div className='box'>
      <div className={styles.card}>
        <Link className={styles.link} to={`/movie/${id}`}>
          <img src={mdImg}></img>
          <p className={styles.title}>
            {title.length > 26 ? `${title.slice(0, 25)}...` : title}
          </p>
          <p className={styles.rates}>⭐️{rating}</p>
        </Link>
      </div>
    </div>
  );
}

export default Movies;
