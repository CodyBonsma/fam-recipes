import React from "react";
import { FaBeer, FaCarrot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBar fixed-top row">
        <div className="col-sm-4">
          <button className="nav-logo">
            <FaCarrot />
          </button>
        </div>

        <div className="nav-links col-sm-4">
          <ul>
            <li onClick={() => (window.location.href = "/")}>Home</li>
            <li onClick={() => (window.location.href = "/savedrecipes")}>
              Recipes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
