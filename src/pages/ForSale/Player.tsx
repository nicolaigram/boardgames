import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Player({ updateName, player }: any) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(player.name);
  }, [player]);

  const handleNameChange = (e: any) => {
    e.preventDefault();
    updateName(name);
  };

  return (
    <StyledPage>
      <form onSubmit={handleNameChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name !== player.name && <button>Set name</button>}
      </form>
      <div>
        <span>Money: {player.money}</span>
      </div>

      {player.cards.map((card: any) => (
        <Card card={card} />
      ))}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 8px;
`;
