import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import MovieCard from "./MovieCard"

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          //console.log('These are the movies: ', response.data)
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);


  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails(props) {
  const { title, director, metascore, stars } = props.movie;
  return (
    <MovieCard title = {title} director = {director} metascore = {metascore} stars={stars} to={props.movie.id} saveOnClick={props.saveMovie} />
  );
}

export default MovieList;
