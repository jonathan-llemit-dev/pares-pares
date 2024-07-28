import React, { useState, useEffect } from "react";

export default function CardsGrid({ cardsList }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    // Double the content of the cards array
    const doubledCards = [...cardsList, ...cardsList];

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = doubledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubledCards[i], doubledCards[j]] = [doubledCards[j], doubledCards[i]];
    }

    setCards(doubledCards);
  }, [cardsList]);

  function flipCard(card, index){

  }

  const numCards = cards.length;

  return (
    <main className="menu">
      {numCards > 0 ? (
        <ul className="cards">
          {/* Here we iterate over each card and use the data as props to render components for each card */}
          {cards.map((card, index) => (
            <li className={`card`} key={`${card.name}-${index}`} onClick={(e) => flipCard(card, index)}>
              <img className={`card_img_hide`} src={card.photoName} alt={`${card.name}-${index}`} title="Flip" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cards available. Please come back later</p>
      )}
    </main>
  );
}
