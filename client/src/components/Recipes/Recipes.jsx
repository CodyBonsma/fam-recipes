import React, { useEffect, useState } from "react";
import Data from "../../utils/connect";
import "./Recipes.css"

const Recipes = () => {
  const [savedRecipes, setSavedRecipes] = useState();

  // grab saved recipes when page loads
  useEffect(() => {
    Data.savedRecipes({})
      .then((foundRecipes) => {
        console.log("WHAT I FOUND", foundRecipes.data);
        if (!foundRecipes.data) {
          setSavedRecipes();
        } else {
          setSavedRecipes(foundRecipes.data);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  const deleteRecipe = (e) => {
    console.log(JSON.stringify(e));
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
        if (!foundRecipes) {
          setSavedRecipes();
        } else {
          setSavedRecipes(foundRecipes.data);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  };
console.log("THIS IS WHAT's SAVED" , savedRecipes)

  return (
    <>
      <div className="saved-recipes-container">
        <h2>This will hold the saved recipes</h2>
        <ul>
          {savedRecipes ? (
            savedRecipes.map((recipe) => {
              return (
                <div>
                  <li>
                    <b>{recipe.name}</b>
                  </li>
                  <label>Ingredients: </label>
                  <li>{recipe.ingredients}</li>
                  <p>{recipe.description}</p>
                  <br />
                  <button onClick={(e) => deleteRecipe(recipe._id)}>
                    delete
                  </button>
                  <hr />
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
