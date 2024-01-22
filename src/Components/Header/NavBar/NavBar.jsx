import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink exact to="/" className="active">
            Accueil
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/soins" className="active">
            Soins
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/chips-de-sciences" className="active">
            Chips de Sciences
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
