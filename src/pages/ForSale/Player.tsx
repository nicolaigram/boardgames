import styled from "@emotion/styled";
import React, { useState } from "react";
import Button from "./components/Button";

export default function Player({ updateName, player, isStarted }: any) {
  const [name, setName] = useState("");

  const handleNameChange = (e: any) => {
    e.preventDefault();
    updateName(name);
  };

  return (
    <StyledPage className="island">
      <form onSubmit={handleNameChange}>
        <div className="name-input">
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
            <Button id="set-name">
              <span>OK</span>
            </Button>
          )}
        </div>
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

  .money {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: green;
  }
  .name-input {
    position: relative;
    input {
      outline: 0;
      border: 1px solid black;
      border-radius: 16px;
      width: 100%;
      height: 60px;
      text-align: left;
      padding-left: 10px;
    }
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 20%;
    }
  }
`;
