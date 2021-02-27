import React from "react";
import axios from "axios";
import "./Search.css";

const CORS = "https://serene-badlands-79714.herokuapp.com/";
const SEARCHURL = "https://api.edamam.com/search?q=";

const Search = () => {
  const getRecipes = () => {
    axios
      .get(CORS + SEARCHURL + "chicken" + "&app_id=cb5d3f03" )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <div className="edamam-section">
      <h3>This will hole the edamam API info</h3>
      <button onClick={() => getRecipes()}>click to get recipes</button>
      <input></input>
    </div>
  );
};

export default Search;
