import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import AboutView from "./components/AboutView.js";
import { Route, Switch } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText){
      console.log(searchText, "is the search text");
      const fetch = require("node-fetch");
  
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
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
          setSearchResults(json.results);
          console.log(json.results);
        })
        .catch((err) => console.error("error:" + err));
    }
    
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
