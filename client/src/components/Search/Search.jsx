import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

const CORS = "https://serene-badlands-79714.herokuapp.com/";
const SEARCHURL = "https://api.edamam.com/search?q=";
const APP_ID = "cb5d3f03";
const APP_KEY = "f3fc16a2bf8ec34b785bef544190e060";

const Search = () => {
  const [list, setList] = useState('');

  const getRecipes = () => {
    return axios
      .get(
        CORS +
          SEARCHURL +
          "chicken" +
          "&app_id=" +
          APP_ID +
          "&app_key=" +
          APP_KEY +
          "&from=0&to=5"
      )
      .then((res) => {
        console.log(res.data.hits);
        setList(res.data.hits);
        console.log(list)
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <div className="edamam-section">
      <h3>This will hole the edamam API info</h3>
      <button onClick={() => getRecipes()}>click to get recipes</button>
      {list ? (
        list.map((item) => {
          return (
            <div key={item.recipe.calories} className="card mb-3 items-card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.recipe.image} alt="recipe picture" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.recipe.label}</h5>
                    <p className="card-text">
                     <ul>
                         <li>{item.recipe.ingredientLines}</li>
                     </ul>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h3>Nothing to show</h3>
        </div>
      )}
    </div>
  );
};

export default Search;
