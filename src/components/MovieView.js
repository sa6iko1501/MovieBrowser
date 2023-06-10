import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA2MzViMGJhM2NjYjU2ZmIwYTI0ZjM3MjE4ODc3MSIsInN1YiI6IjY0ODIxMmYyOTkyNTljMDExYzNmMDMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PEn0P7qhLzoAAgHphZuPoG9HOZSPRilpWZcwxR5y6LM",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json)
        setIsLoading(false)
        })
      .catch((err) => console.error("error:" + err));
  }, [id]);

    function renderMovieDetails(){
    if(isLoading){
        return (
            <div>
                <Hero text="Loading..."/>
            </div>
        
        )
    }
    //`https://image.tmdb.org/t/p/w500${movieDetails.belongs_to_collection.backdrop_path}`
    if(movieDetails){
        //TODO DEAL WITH MISSING IMAGE
        console.log(movieDetails)
        const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
        var backdropUrl = null;
        const imdbUrl = `https://www.imdb.com/title/${movieDetails.imdb_id}`
        if(movieDetails.belongs_to_collection){
            backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.belongs_to_collection.backdrop_path}`
        }
        else{
            backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        }
        return (
            <div>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                <div className="container my-2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid shadow rounded" src={posterUrl} alt="..." ></img>
                        </div>
                        <div className="col-md-9">
                            <h3>{movieDetails.tagline}</h3>
                            <br/>
                            <p>{movieDetails.overview}</p>
                            <br/>
                            <p>Release Date: {movieDetails.release_date}</p>
                            <p>Budget: {movieDetails.budget}$</p>
                            <p>Runtime: {movieDetails.runtime} minutes</p>
                            <p>Imdb Page:
                            <a className="mx-1" href={imdbUrl} target="_blank" rel="noopener noreferrer">{movieDetails.title}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
  }
  console.log(id);
  return renderMovieDetails();
};

export default MovieView;
