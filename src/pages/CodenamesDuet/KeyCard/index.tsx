import styled from "@emotion/styled";
import React, { useState } from "react";
import { green_gradient, green_light, sand } from "../util/colors";
import { getKeys, KeyState } from "./util/keys";

export default function KeyCard() {
  const [keys, setKeys] = useState<KeyState[]>([]);
  const [gameId, setGameId] = useState("");
  const onSelectGameId = (e: any) => {
    e.preventDefault();
    const keys = getKeys(gameId);
    if (!keys) return;
    setKeys(keys);
    setGameId("");
  };
  return (
    <StyledPage>
      <form onSubmit={onSelectGameId}>
        <input
          type="text"
          name="gameId"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <input type="submit" value="Select" />
      </form>
      <div className="keys">
        {keys.map((key) => (
          <div className={"key " + key} />
        ))}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  form {
    input {
      height: 40px;
      margin-bottom: 20px;
    }
  }
  .keys {
    @media all and (orientation: landscape) {
      width: 90vh;
      height: 90vh;
    }
    @media all and (orientation: portrait) {
      width: 90vw;
      height: 90vw;
    }

    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    .key {
      flex: 1 0 18%;
      border: 1px solid black;
      &.bystander {
        background: ${sand};
      }
      &.assasin {
        background: black;
      }
      &.spy {
        background: ${green_gradient};
      }
    }
  }
`;
