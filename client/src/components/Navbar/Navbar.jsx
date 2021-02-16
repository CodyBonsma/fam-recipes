import React from "react";
import { FaBeer, FaCarrot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <button className="nav-logo">
          <FaCarrot />
        </button>
        <ul>
            <li>Home</li>
            <li>Recipes</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
