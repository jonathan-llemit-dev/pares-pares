import React, { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import CardsGrid from "./CardsGrid";

const cardsList = [
  {
    id: 1,
    name: "barbeque",
    photoName: "foods/barbeque.jpg",
  },
  {
    id: 2,
    name: "carbonara",
    photoName: "foods/carbonara.jpg",
  },
  {
    id: 3,
    name: "graham",
    photoName: "foods/graham.jpg",
  },
  {
    id: 4,
    name: "shawarma",
    photoName: "foods/shawarma.jpg",
  },
  {
    id: 5,
    name: "shake",
    photoName: "foods/shake.jpg",
  },
  {
    id: 6,
    name: "ramen",
    photoName: "foods/ramen.jpg",
  },
  {
    id: 7,
    name: "spaghetti",
    photoName: "foods/spaghetti.jpg",
  },
  {
    id: 8,
    name: "icecream",
    photoName: "foods/icecream.jpg",
  },
];

export default function App() {

  const [pairedCards, setPairedCards] = useState([]);

  function handlePairedCards(pairedCard){
    setPairedCards([...pairedCards, pairedCard]);
  }

  function resetPairedCards(){
    setPairedCards(pairedCards => []);
  }

  return (
    <div className="container">
      <Header />
      {cardsList.length == pairedCards.length ? (
          <Result onResetPairedCards={resetPairedCards} />
        ):(
          <CardsGrid cardsList={cardsList} pairedCards={pairedCards} onPairedCards={handlePairedCards} />
        )
      }
    </div>
  );
}
