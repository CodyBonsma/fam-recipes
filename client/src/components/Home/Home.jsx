import React, { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipe, setRecipe] = useState();
  const [isVegetarian, setIsVegetarian] = useState(false);

  const nameRef = React.useRef();
  const ingredientRef = React.useRef();
  const descriptionRef = React.useRef();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 home-header">
          <h2>This will be the homepage</h2>
          <Modal
            open={isOpen}
            nameRef={nameRef}
            ingredientRef={ingredientRef}
            descriptionRef={descriptionRef}
            recipe={recipe}
            isVegetarian={isVegetarian}
          />

          <button onClick={() => setIsOpen(true)}>Add Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
