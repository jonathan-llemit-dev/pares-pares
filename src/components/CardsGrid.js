import React, { useState } from "react";
// import Anime from "./Anime";

export default function CardsGrid({ cardsList }) {
  const cards = cardsList;
  const numCards = cards.length;

  return (
    <main className="menu">
      {numCards > 0 ? (
        <ul className="cards">
          {/* here we iterate each data on an object and used the data as props to render components for each data */}
          {cards.map((card) => (
            <li className={`card`} key={card.name}>
              <img src={card.photoName} alt={card.name} title="Flip" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cards available. Please come back later</p>
      )}
    </main>
  );
}
