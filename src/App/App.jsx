import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Soins from "../Components/Soins/Soins";
import Chips from "../Components/Chips/Chips";
import MentionsLegales from "../Components/Footer/MentionsLegales/MentionsLegales";
import Contacts from "../Components/Footer/Contacts/Contacts";
import Footer from "../Components/Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soins" element={<Soins />} />
            <Route path="/chips-de-sciences" element={<Chips />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
