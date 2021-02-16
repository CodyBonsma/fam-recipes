import React from "react";
import { FaBeer, FaCarrot } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <button className="nav-button">
          <FaCarrot />
        </button>
        <ul>
          <li href="/">Home</li>
          <li href="/savedrecipes">Recipes</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
