import React, { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [recipe, setRecipe] = useState({});
  const nameRef = React.useRef();
  const ingredientRef = React.useRef();
  const descriptionRef = React.useRef();

  // save recipe function
  const saveRecipe = () => {
    console.log("clicked save recipe");
  };

  const handleInput = (e) => {
    console.log(nameRef.current.value);
    console.log(ingredientRef.current.value);
    console.log(descriptionRef.current.value);

    setRecipe({
      name: nameRef.current.value,
      ingredients: ingredientRef.current.value,
      description: descriptionRef.current.value,
      vegetarian: {isVegetarian},
    });
  };

  console.log("RECIPE: ", recipe);

  // checkbox for the vegetarian options
  const checkVeg = (e) => {
    console.log("clicked veg");
    setIsVegetarian((prev) => !prev);
  };

  console.log("is VEGGIE? ", isVegetarian);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 home-header">
          <h2>This will be the homepage</h2>
          <Modal open={isOpen}>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Recipe Name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="What's cooking"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Ingredients (comma separated)
              </label>
              <input
                ref={ingredientRef}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="garlic, parsley..."
              />
            </div>
            <label for="inputPassword5" className="form-label">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              id="recipe-description"
              className="form-control"
            />
            <div id="recipe-helpBlock" className="form-text">
              Describe the process to get this delicious dish ready and served
            </div>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={isVegetarian}
                onChange={checkVeg}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Vegetarian
              </label>
            </div>
            <br />
            <button onClick={() => setIsOpen(false)}>close</button>
            <button onClick={(e) => handleInput(e)}>save</button>
          </Modal>
          <button onClick={() => setIsOpen(true)}>Add Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
