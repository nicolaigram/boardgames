import styled from "@emotion/styled";
import React, { useState } from "react";
import PlayersPrompt from "./PlayersPrompt";

interface Player {
  hp: number;
}

export default function StarRealms() {
  const [startHp] = useState(50);
  const createPlayer = (): Player => ({ hp: startHp });
  const [players, setPlayers] = useState<Player[]>([]);
  const [showDialog, setShowDialog] = useState("player-count");

  const setPlayerCount = (count: number) => {
    const newPlayers = [];
    for (let i = 0; i < count; i++) {
      newPlayers.push(createPlayer());
    }
    setPlayers(newPlayers);
    setShowDialog("");
  };

  const sound = new Audio("/boardgames/star-realms/laser_shot.mp3");

  const setHp = (playerIndex: number, amount: number) => {
    if (amount < 0) {
      sound.play();
    }
    const copy = [...players];
    const currentHp = copy[playerIndex].hp;
    let newHp = currentHp + amount;
    if (newHp < 0) newHp = 0;
    copy[playerIndex].hp = newHp;
    setPlayers(copy);
  };

  const resetGame = () => {
    setPlayers([]);
    setShowDialog("player-count");
  };

  return (
    <StyledPage>
      {showDialog !== "player-count" && (
        <button onClick={resetGame} style={{ marginBottom: "20px" }}>
          Reset game
        </button>
      )}
      <PlayersContainer>
        {players.map((player, index) => (
          <Player>
            <HealthBar percentage={(player.hp / startHp) * 100}>
              <span>{player.hp}</span>
            </HealthBar>
            {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{"Player " + (index + 1)}</p>
            </div> */}
            <div style={{ paddingTop: "16px" }}>
              <button onClick={() => setHp(index, -5)}>-5</button>
              <button onClick={() => setHp(index, -1)}>-1</button>
              <button onClick={() => setHp(index, 1)}>+1</button>
              <button onClick={() => setHp(index, 5)}>+5</button>
            </div>
          </Player>
        ))}
      </PlayersContainer>
      <PlayersPrompt
        display={showDialog === "player-count"}
        setPlayerCount={setPlayerCount}
      />
    </StyledPage>
  );
}

function getPlayerColor(percentage: number) {
  if (percentage <= 0) return "#333";
  if (percentage <= 25) return "#B81D13";
  if (percentage <= 50) return "#EFB700";
  return "#008450";
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  min-height: 100vh;
  background: url("/boardgames/star-realms/star-wars-backgrounds-14.jpg");
  animation: 10s bg alternate infinite;
  background-position: center;
  @keyframes bg {
    0% {
      background-size: 100%;
    }
    100% {
      background-size: 120%;
    }
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Player = styled.div`
  border: 1px solid black;
  overflow: hidden;
  padding: 16px;
  font-size: 30px;
  background-color: #eee;
  margin-bottom: 20px;
  opacity: 0.9;
  border-radius: 20px;
  border: 10px solid #333;
  p {
    margin: 0 0 10px;
  }
  button {
    height: 80px;
    width: 100px;
    font-size: 24px;
    border: 0;
    background-color: #ccc;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;

const HealthBar: any = styled.div`
  height: 60px;
  width: calc(100% + 32px);
  background: black;
  margin-left: -16px;
  margin-top: -16px;

  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: absolute;
    color: white;
  }
  &::after {
    content: "";
    background: ${(props: any) => getPlayerColor(props.percentage)};
    display: block;
    height: 100%;
    width: ${(props: any) => props.percentage + "%"};
  }
`;
