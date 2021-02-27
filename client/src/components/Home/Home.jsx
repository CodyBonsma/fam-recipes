import React, { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import Data from "../../utils/connect";
import Search from "../Search/Search";
import { ImageOne, ImageTwo, ImageThree, ImageFour } from "../../images/index";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [recipe, setRecipe] = useState();
  const [nowImage, setNowImage] = useState();
  const isFirstRender = React.useRef(true);
  const nameRef = React.useRef();
  const ingredientRef = React.useRef();
  const descriptionRef = React.useRef();

  let imageArr = [
    ImageOne.default,
    ImageTwo.default,
    ImageThree.default,
    ImageFour.default,
  ];

  const handleInput = (e) => {
    setRecipe({
      name: nameRef.current.value,
      ingredients: ingredientRef.current.value,
      description: descriptionRef.current.value,
      vegetarian: { isVegetarian },
    });
  };

  // generate random number and then index the image array with it
  // then set state with random image for the header
  useEffect(() => {
    let random = Math.floor(Math.random() * 3);
    let randomImage = imageArr[random];
    setNowImage(randomImage);
  }, []);

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
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
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
        <div
          className="col-sm-12 home-header overlay"
          style={{ backgroundImage: `url(${nowImage})` }}
        >
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
          <div className="header-action">
            <h2 id="header-title">Taste buds for life</h2>
            <p id="header-text">
              Browse hundreds of different recipes, create and save your own,
              give your meals life
            </p>
            <button id="header-button" onClick={() => setIsOpen(true)}>
              Add Recipe
            </button>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Home;
