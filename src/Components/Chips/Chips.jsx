import React, { useState, useEffect } from "react";
import "./Chips.scss";
import data from "./Data/Data";

const Chips = () => {
  const [cards, setCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCards(data);
    setCurrentCards(getRandomCards(data, 5));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cards.length === 0) {
        setCards(data);
      }
      setCurrentCards(getRandomCards(cards, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, [cards]);

  const getRandomCards = (cardsArray, count) => {
    if (cardsArray.length === 0) return [];
    const shuffledCards = shuffleArray(cardsArray);
    const selectedCards = shuffledCards.slice(0, count);
    const updatedCards = cardsArray.filter(
      (card) =>
        !selectedCards.some((selectedCard) => selectedCard.id === card.id)
    );
    return selectedCards.concat(
      updatedCards.slice(0, count - selectedCards.length)
    );
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="description-chips">
        <p>Le corps humain cache bien des secrets...</p>
        <p>Découvrez-les en lisant ces cartes !</p>
      </section>
      <section className="caroussel">
        {currentCards.map((card) => (
          <div className="card" key={card.id} onClick={() => handleClick(card)}>
            <div className="card-details">
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.accroche}</p>
              <button onClick={() => handleClick(card)}>En savoir plus</button>
            </div>
          </div>
        ))}
      </section>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCard.title}</h2>

            <p>{selectedCard.explication}</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chips;
