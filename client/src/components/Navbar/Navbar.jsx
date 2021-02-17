import React from "react";
import { FaBeer, FaCarrot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBar fixed-top row">
        <div className="col-sm-4">
          <section
            onClick={() => (window.location.href = "/")}
            className="nav-logo"
          >
            <FaCarrot />
          </section>
        </div>

        <div className="nav-links col-sm-4">
          <ul>
            <li id="nav-items" onClick={() => (window.location.href = "/")}>
              Home
            </li>
            <li
              id="nav-items"
              onClick={() => (window.location.href = "/savedrecipes")}
            >
              Recipes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
