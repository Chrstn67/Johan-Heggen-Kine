import React, { useState } from "react";
import "./Soins.scss";
import afficheImage1 from "../../Assets/Images/affiche-vicerale.png";
import afficheImage2 from "../../Assets/Images/therapie-jones.png";

const Soins = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    if (expandedImage === image) {
      setExpandedImage(null);
    } else {
      setExpandedImage(image);
    }
  };

  return (
    <div>
      <section className="soins-list">
        <img
          src={afficheImage1}
          alt="Affiche Vicerale"
          className={expandedImage === afficheImage1 ? "expanded" : ""}
          onClick={() => handleImageClick(afficheImage1)}
        />
        <img
          src={afficheImage2}
          alt="Affiche Méthode Jones"
          className={expandedImage === afficheImage2 ? "expanded" : ""}
          onClick={() => handleImageClick(afficheImage2)}
        />
      </section>
    </div>
  );
};

export default Soins;
