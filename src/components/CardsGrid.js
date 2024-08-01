import React, { useState, useEffect } from "react";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default function CardsGrid({ cardsList, pairedCards, onPairedCards }) {
  const [cards, setCards] = useState([]);
  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [pause, setPause] = useState(false);

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

  const flipCard = async (card, index) => {
    if(!pause){

      if(!selectedCard1){
        setSelectedCard1({ ...card, index: `${index}` });
      }else if(!selectedCard2){

        setSelectedCard2({ ...card, index: `${index}` });
        
        setPause(true);
        await sleep(750);

        if (selectedCard1.id === card.id) {
          onPairedCards(selectedCard1.id);
        }

        // Reset selected cards and pause
        setSelectedCard1(null);
        setSelectedCard2(null);
        setPause(false);

      }

    }
  }

  const numCards = cards.length;

  return (
    <main className="menu">
      {numCards > 0 ? (
        <ul className="cards">
          {/* Here we iterate over each card and use the data as props to render components for each card */}
          {cards.map((card, index) => (
            <li 
              className={`card`} 
              key={`${card.name}-${index}`} 
              onClick={
                () => (
                        (!pairedCards.includes(card.id)) && 
                        ((!selectedCard1 || selectedCard1.index != index) && (!selectedCard2 || selectedCard2.index != index))
                      ) 
                      && flipCard(card, index)}
            >
              <img 
                  className={
                    pairedCards.includes(card.id)
                    ? "card_paired"
                    : (selectedCard1 && selectedCard1.index == index) || 
                      (selectedCard2 && selectedCard2.index == index)
                    ? "card_img_show"
                    : "card_img_hide"
                  }  
                  src={card.photoName} 
                  alt={`${card.name}-${index}`} 
                  title="Flip" 
                />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cards available. Please come back later</p>
      )}
    </main>
  );
}
