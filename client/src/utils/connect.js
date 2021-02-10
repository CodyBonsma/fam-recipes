import axios from "axios";

export default {
  saveRecipe: (recipe) => {
    console.log("SENDING recipe: ", recipe);
    return axios.post("/api/recipe", recipe);
  },

  savedRecipes: (savedRecipe) => {
    console.log("Requesting recipes: ", savedRecipe);
    return axios.get("/api/recipe", savedRecipe);
  },
};
