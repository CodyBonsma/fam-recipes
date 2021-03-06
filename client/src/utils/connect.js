import axios from "axios";

export default {
  saveRecipe: (recipe) => {
    return axios.post("/api/recipe", recipe);
  },

  savedRecipes: (savedRecipe) => {
    return axios.get("/api/recipe", savedRecipe);
  },

  deleteRecipe: (recipeID) => {
    return axios.delete("/api/recipe/", { data: { recipeID } });
  },
};
