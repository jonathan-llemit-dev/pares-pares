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
            <li className={`anime`} key={card.name}>
              sample
            </li>
          ))}
        </ul>
      ) : (
        <p>We're still working on our anime list. Please come back later</p>
      )}
    </main>
  );
}
