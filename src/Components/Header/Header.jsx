import React from "react";
import Navbar from "./NavBar/NavBar";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Cabinet de kinésithérapie</h1>
        <span>Johan HEGGEN</span>
      </header>

      <section>
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
