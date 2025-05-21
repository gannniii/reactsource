import React from "react";
import InfoCard from "./InfoCard";

const cards = [
  { idx: 1, title: "Props in React", content: "Props pass data from one component to another", author: "Gaeun" },
  { idx: 2, title: "React Composition", content: "Composition makes your components more reusable", author: "Minsung" },
  { idx: 3, content: "Composition makes your components more reusable" },
];

const Card = () => {
  return (
    <>
      {cards.map((card) => (
        <InfoCard key={card.id} title={card.title} content={card.content} author={card.author} />
      ))}
    </>
  );
};

export default Card;
