const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "recipe name is required",
  },
  ingredients: [String],
  description: {
    type: String,
  },
  cookTime: {
    type: Number,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
