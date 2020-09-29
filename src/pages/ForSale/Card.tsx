import React from "react";

export default function Card({
  card,
}: {
  card: { name: string; value: number };
}) {
  console.log(card);
  return (
    <div>
      <p>Name: {card.name}</p>
      <p>Value: {card.value}</p>
    </div>
  );
}
