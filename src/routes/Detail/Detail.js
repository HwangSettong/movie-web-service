import React, { useEffect, useState } from "react";
import  { useParams } from "react-router-dom"


function Detail() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false)
    };
    
    console.log(movie)
    console.log(typeof(movie.genres))
    useEffect(() => {
        getMovie();
    }, []);
    
    return (
        <div>
        {loading ? <h1>Loading</h1> : 
            <div>
                <h1>{movie.title_long}</h1>
                <img src={movie.medium_cover_image}></img>
                <h2>Discription</h2>
                <p>{movie.description_full}</p>
                <p>Running time : {movie.runtime}m</p>
            </div>
        }
        </div>
    );
}

export default Detail;