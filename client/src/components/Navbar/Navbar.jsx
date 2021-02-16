import React from "react";
import { FaBeer, FaCarrot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBar fixed-top">
        <button className="nav-logo">
          <FaCarrot />
        </button>
        <ul>
            <li onClick={() => (window.location.href="/")}>Home</li>
            <li onClick={() => (window.loacation.href="/savedrecipes")}>Recipes</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
