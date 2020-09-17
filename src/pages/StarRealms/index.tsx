import styled from "@emotion/styled";
import React, { useState } from "react";

export default function StarRealms() {
  const createPlayer = () => ({ hp: 50 });
  const [players, setPlayers] = useState([
    createPlayer(),
    createPlayer(),
    createPlayer(),
    createPlayer(),
  ]);
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

  return (
    <StyledPage>
      <PlayersContainer>
        {players.map((player, index) => (
          <Player hp={player.hp}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{"Player " + (index + 1)}</p>
              <p>{"HP " + player.hp}</p>
            </div>
            <button onClick={() => setHp(index, -5)}>-5</button>
            <button onClick={() => setHp(index, -1)}>-1</button>
            <button onClick={() => setHp(index, 1)}>+1</button>
            <button onClick={() => setHp(index, 5)}>+5</button>
          </Player>
        ))}
      </PlayersContainer>
    </StyledPage>
  );
}

function getPlayerColor(hp: number) {
  if (hp <= 0) return "#333";
  if (hp < 10) return "#B81D13";
  if (hp < 25) return "#EFB700";
  return "#008450";
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
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

const Player: any = styled.div`
  border: 1px solid black;
  padding: 16px;
  font-size: 30px;
  background-color: ${(props: any) => getPlayerColor(props.hp)};
  margin-bottom: 20px;
  opacity: 0.9;
  p {
    margin: 0 0 10px;
  }
  button {
    height: 80px;
    width: 100px;
    font-size: 24px;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;
