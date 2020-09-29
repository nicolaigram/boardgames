import styled from "@emotion/styled";
import React, { useState } from "react";

export default function Player({ updateName, player, isStarted }: any) {
  const [name, setName] = useState("");

  const handleNameChange = (e: any) => {
    e.preventDefault();
    updateName(name);
  };

  return (
    <StyledPage className="island">
      <form onSubmit={handleNameChange}>
        {!isStarted && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        )}
        {isStarted && <h2 id="player-name">{player.name}</h2>}
        {name !== player.name && !isStarted && (
          <button id="set-name">OK</button>
        )}
      </form>
      {isStarted && (
        <div className="money">
          <span>Total money: {player.money}.000$</span>
        </div>
      )}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  #player-name {
    text-align: center;
  }
  input,
  button {
    height: 60px;
    width: 100%;
    text-align: center;
  }
  .money {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: green;
  }
`;
