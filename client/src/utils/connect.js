import axios from "axios";

export default {
  saveRecipe: (recipe) => {
    return axios.post("/api/recipe", recipe);
  },

  savedRecipes: (savedRecipe) => {
    return axios.get("/api/recipe", savedRecipe);
  },
};
