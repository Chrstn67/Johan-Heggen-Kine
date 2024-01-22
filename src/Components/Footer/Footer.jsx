import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navbar">
        <ul className="navbar__list__footer">
          <li className="navbar__item">
            <NavLink to="/mentions-legales" className="active">
              Mentions légales
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacts" className="active">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
