import styled from "@emotion/styled";
import React from "react";
import Card from "./Card";

export default function Hand({ player }: any) {
  console.log(player.cards);
  return (
    <StyledHand className="island">
      {player.cards.map((card: any) => (
        <Card card={card} />
      ))}
    </StyledHand>
  );
}

const StyledHand = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
