import styled from "@emotion/styled";
import React, { useState } from "react";
import { green_gradient, green_light, sand } from "../util/colors";
import { getKeys, KeyState } from "./util/keys";

export default function KeyCard() {
  const [keys, setKeys] = useState<KeyState[]>([]);
  const [gameId, setGameId] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const onSelectGameId = (e: any) => {
    e.preventDefault();
    const keys = getKeys(gameId);
    if (!keys) return;
    setKeys(keys);
    setIsStarted(true);
  };
  const newGame = () => {
    setIsStarted(false);
    setGameId("");
    setKeys([]);
  };
  return (
    <StyledPage>
      {!isStarted && (
        <div className="is-not-started">
          <p>
            <strong>GUIDE: </strong>Begge spillere indtaster det samme tal,
            efterfulgt af et bogstav i rækkefølge. For eksempel kan den ene
            skrive 101a, og den anden 101b.
          </p>
          <form onSubmit={onSelectGameId}>
            <input
              type="text"
              name="gameId"
              placeholder="Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
            />
            <input type="submit" value="Start" />
          </form>
        </div>
      )}

      {isStarted && (
        <div className="is-started">
          <button id="newGame" onClick={newGame}>
            Nyt spil
          </button>
          <div className="keys">
            {keys.map((key) => (
              <div className={"key " + key} />
            ))}
          </div>
        </div>
      )}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background: url(${process.env.PUBLIC_URL}/codenames-duet/wooden-table-bg.jpg);
  .is-not-started {
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 8px;
  }
  button#newGame {
    margin-bottom: 20px;
  }
  form {
    input {
      margin-bottom: 20px;
      height: 40px;
    }
  }
  .keys {
    @media all and (orientation: landscape) {
      width: 90vh;
      height: 70vh;
    }
    @media all and (orientation: portrait) {
      width: 90vw;
      height: 70vw;
    }

    display: flex;
    flex-wrap: wrap;
    .key {
      flex: 1 0 18%;
      border: 1px solid black;
      margin: 0.5%;
      border-radius: 8px;
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
