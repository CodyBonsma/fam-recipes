import React, { useEffect, useState } from "react";
import Data from "../../utils/connect";

const Recipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // grab saved recipes when page loads
  useEffect(() => {
    Data.savedRecipes({})
      .then((foundRecipes) => {
        console.log("WHAT I FOUND", foundRecipes);
        setSavedRecipes(foundRecipes);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  
  return (
    <div>
      <h2>This will hold the saved recipes</h2>
    </div>
  );
};

export default Recipes;
