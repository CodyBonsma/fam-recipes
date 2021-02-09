import axios from "axios";

export default {
  saveRecipe: (recipe) => {
    console.log("SENDING recipe: ", recipe);
    return axios.post("/api/recipe", recipe);
  },
};
