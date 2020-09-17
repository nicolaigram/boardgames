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
  const setHp = (playerIndex: number, amount: number) => {
    const sound = new Audio("/boardgames/laser_shot.mp3");
    sound.play();
    const copy = [...players];
    copy[playerIndex].hp = copy[playerIndex].hp + amount;
    setPlayers(copy);
  };

  return (
    <StyledPage>
      <PlayersContainer>
        {players.map((player, index) => (
          <Player hp={player.hp}>
            <p>{"Player " + (index + 1)}</p>
            <p>{"HP " + player.hp}</p>
            <button onClick={() => setHp(index, 1)}>+1</button>
            <button onClick={() => setHp(index, -1)}>-1</button>
          </Player>
        ))}
      </PlayersContainer>
    </StyledPage>
  );
}

function getPlayerColor(hp: number) {
  if (hp < 10) return "red";
  if (hp < 25) return "yellow";
  return "green";
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

const PlayersContainer = styled.div`
  display: flex;
`;

const Player: any = styled.div`
  border: 1px solid black;
  padding: 20px;
  font-size: 24px;
  background-color: ${(props: any) => getPlayerColor(props.hp)};
  &:not(:first-of-type) {
    margin-left: 20px;
  }
  button {
    height: 80px;
    width: 100px;
    font-size: 24px;
  }
`;
