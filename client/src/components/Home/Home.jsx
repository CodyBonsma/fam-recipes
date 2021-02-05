import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 home-header">
          <h2>This will be the homepage</h2>
          <Modal open={isOpen}>
            <div class="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Recipe Name
              </label>
              <input
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
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="garlic, parsley..."
              />
            </div>
            <label for="inputPassword5" className="form-label">
              Description
            </label>
            <input
              type="description"
              id="recipe-description"
              className="form-control"
            />
            <div id="recipe-helpBlock" className="form-text">
              Describe the process to get this delicious dish ready and served
            </div>
            <button onClick={() => setIsOpen(false)}>close</button>
          </Modal>
          <button onClick={() => setIsOpen(true)}>Add Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
