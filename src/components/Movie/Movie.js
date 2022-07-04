import React from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({id, poster, title, genre, summary}){
    return(
        <div className={styles.movie}>
            <img className={styles.movie__img} alt={title} src={poster}/>
            <div>
            <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> 
            <ul className={styles.movie__genres}>
            {genre.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
            </div>
        </div>
    );
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf([PropTypes.string]).isRequired,
    sumarry: PropTypes.string.isRequired,
}

export default Movie;