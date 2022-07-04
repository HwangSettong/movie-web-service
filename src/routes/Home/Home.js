import React, {useState, useEffect} from "react";
import Movie from "../../components/Movie/Movie";
import styles from "./style.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
        const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )).json()
        setMovies(json.data.movies);
        
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        }, [])
    return (
        <div className={styles.container}>
            {loading ? (
            <div className={styles.loader}>
                <h1>Loading...</h1>
            </div>
            ) :(
            <div className={styles.movies}>
                {movies.map(item => (<Movie
                    key={item.id} 
                    id={item.id} 
                    poster={item.large_cover_image} 
                    title={item.title_long} 
                    genre={item.genres} 
                    summary={item.summary}
                    />
                ))}
            </div>
            )}
        </div>
    );
}

export default Home;