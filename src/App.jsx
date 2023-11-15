import  MovieCard from "./componts/moviecard/moviecard";
import "../src/App.css";
import { useEffect, useState } from "react";
import MainHeader from "./componts/header/header";

const App = () => {
  const [movies, setmovies] = useState([]);

  const Ser="https://api.themoviedb.org/3/search/movie"
  const loadData = async () => {
    try {
      let resp = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b6434bbf5557a52512008a50a1331ff7"
      );
      let jsonData = await resp.json();
      setmovies(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div className="container">
      

      <div className="movies">
                                            {/* error */}
        {/* {movies.map((el) => 
          <MovieCard {...el} />
        )} */}
         <MainHeader/>
      </div>
    </div>
  );
};

export default App;
