import React, { useEffect, useState } from "react";
import Card from "./Card";
const ENDPOINT = "http://localhost:4002";

export default function GenericCardGame() {
  const [socket] = useState<any>(require("socket.io-client")(ENDPOINT));
  const [cards, setCards] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("cards", setCards);
  }, [socket]);

  return (
    <>
      <h1>Hello</h1>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </>
  );
}
