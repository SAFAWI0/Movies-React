import MovieCard from "./componts/moviecard/moviecard";
import "../src/App.css";
import img from "../assets/logo.png";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [val, setval] = useState("");

  const Ser =
    "https://api.themoviedb.org/3/search/movie?api_key=b6434bbf5557a52512008a50a1331ff7&query=";
  const loadData = async () => {
    try {
      let resp = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b6434bbf5557a52512008a50a1331ff7"
      );
      let jsonData = await resp.json();
      setmovies(jsonData.results);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);
  useEffect(() => {
    loadData();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(Ser + val)
      .then((res) => res.json())
      .then((data) => setmovies(data.results));
  };
  const handleClick = () => {};

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={img} />
        <form onSubmit={handleSearch}>
          <input
            className="input"
            type="text"
            placeholder="Search"
            onChange={(e) => setval(e.target.value)}
          />
          <button className="buttom" onClick={handleClick}>
            Gooo{" "}
          </button>
        </form>
      </div>

      <div className="movies">
        {movies.map((el) => (
          <MovieCard {...el} />
        ))}
      </div>
    </div>
  );
};

export default App;
