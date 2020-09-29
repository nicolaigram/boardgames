import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Hand({ player, socket, visible }: any) {
  const [selectedCard, setSelectedCard] = useState(-1);
  const handleSelect = (card: any) => {
    setSelectedCard(card.id);
    socket.emit("select-card", card);
  };

  useEffect(() => {
    if (!socket) return;
    socket.on("reset-cards", () => {
      setSelectedCard(-1);
    });
  }, [socket]);

  if (!visible) return null;

  return (
    <StyledHand className="island">
      {player.cards.map((card: any) => (
        <Card
          card={card}
          selected={selectedCard === card.id}
          onClick={() => handleSelect(card)}
        />
      ))}
    </StyledHand>
  );
}

const StyledHand = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
