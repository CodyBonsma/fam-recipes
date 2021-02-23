import React, { useEffect, useState } from "react";
import Data from "../../utils/connect";
import "./Recipes.css";

const Recipes = () => {
  const [savedRecipes, setSavedRecipes] = useState();
  console.log(savedRecipes);

  // grab saved recipes when page loads
  useEffect(() => {
    Data.savedRecipes({})
      .then((foundRecipes) => {
        if (!foundRecipes.data.length) {
          setSavedRecipes();
        } else if (foundRecipes) {
          setSavedRecipes(foundRecipes.data);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  const deleteRecipe = ({e}) => {
    // console.log(JSON.stringify(e));
    console.log("clicked to delete recipe", e);
    let ID = e;
    Data.deleteRecipe({ ID })
      .then((deletedRecipe) => {
        console.log("DELETED THIS", deletedRecipe);
        reloadRecipes();
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  const reloadRecipes = () => {
    Data.savedRecipes({})
      .then((foundRecipes) => {
        console.log("WHAT I FOUND", foundRecipes.data);
        if (!foundRecipes.data.length) {
          setSavedRecipes();
        } else {
          setSavedRecipes(foundRecipes.data);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <>
      <div className="saved-recipes-container">
        <h2>Your saved recipes</h2>

        <ul>
          {savedRecipes ? (
            savedRecipes.map((recipe) => {
              return (
                <div key={recipe._id} className="card recipe-card">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <hr />
                    <p className="card-text">{recipe.description}</p>
                    <a href="#" className="card-link">
                      See More
                    </a>
                    <a
                      href="#"
                      value={recipe._id}
                      className="card-link"
                      onClick={(e) => deleteRecipe(e.target.value)}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-recipes container">
              <p>No saved recipes to show</p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Recipes;
