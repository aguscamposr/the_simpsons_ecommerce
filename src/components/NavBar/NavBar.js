import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import img from "./logo_superman.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <Link to="/">
        <img src={img}  alt="logo_superman"></img>
      </Link>
      <ul className="unorderList">
        <li className="listStyle">
          <Link to="/" className="Link">Home</Link>
        </li>
        <li className="listStyle">
          <Link to="/about" className="Link">About</Link>
        </li>
        <li className="listStyle">
          <Link to="/contact" className="Link">Contact</Link>
        </li>
        <li className="listStyle">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
