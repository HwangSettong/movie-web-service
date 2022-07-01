import React, {useState, useEffect} from "react";
import "./style/style.css"
require('dotenv').config()
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )).json()
    console.log(json)
    setMovies(json.data.movies);
    
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
    }, [])
  console.log(movies)
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        <table>
          <th></th>
          <th>Title</th>
          <th>Genre</th>
          {movies.map(item =>
            <tr key={item.id}>
              <td><img className="poster" src={item.large_cover_image}/></td>
              <td>{item.title_long}</td>
              <td>{item.genres.join(", ")}</td>

          </tr>)}
        </table>
      </div>
      
      }
    </div>
  );
}

export default App;
