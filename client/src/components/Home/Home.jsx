import React, { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import Data from "../../utils/connect";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [recipe, setRecipe] = useState();
  const isFirstRender = React.useRef(true);
  const nameRef = React.useRef();
  const ingredientRef = React.useRef();
  const descriptionRef = React.useRef();

  const handleInput = (e) => {
    setRecipe({
      name: nameRef.current.value,
      ingredients: ingredientRef.current.value,
      description: descriptionRef.current.value,
      vegetarian: { isVegetarian },
    });
  };

// useEffect to trigger sendEntry when state (recipe) has been updated
// isFirstRender tracks the initial render when the page loads - ugly but works
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    sendEntry();
  }, [recipe]);

  const sendEntry = () => {
    Data.saveRecipe(recipe)
      .then((savedRecipe) => {
        console.log("this is the saved recipe: ", savedRecipe.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  // checkbox for the vegetarian options
  const checkVeg = (e) => {
    console.log("clicked veg");
    setIsVegetarian((prev) => !prev);
  };

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
