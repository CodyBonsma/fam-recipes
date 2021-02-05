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
            <h3>this will hold a form</h3>
            <button onClick={() => setIsOpen(false)}>close</button>
          </Modal>
          <button onClick={() => setIsOpen(true)}>Add Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
