import styled from "@emotion/styled";
import { env } from "process";
import React, { useState } from "react";

interface Player {
  name: string;
  editingName: boolean;
  level: number;
  strength: number;
  gender: string;
}

export default function Munchkin() {
  const [startHp, setStartHp] = useState(50);

  const colors = [
    "#915A9A", // Purple
    "#F2CA4C", // Yellow
    "#CD2026", // Red
    "#369541", // Green,
    "#596DAD", // Blue
  ];

  const createPlayer = (): Player => ({
    name: "",
    editingName: true,
    level: 0,
    strength: 0,
    gender: "male",
  });

  const changePlayerStat = (
    playerIndex: number,
    stat: keyof Player,
    value: any
  ) => {
    const copy: any = [...players];
    copy[playerIndex][stat] = value;
    setPlayers(copy);
  };

  const changeGender = (playerIndex: number) => {
    const player = players[playerIndex];
    changePlayerStat(
      playerIndex,
      "gender",
      player.gender === "male" ? "female" : "male"
    );
  };

  const addPlayer = () => {
    setPlayers([...players, createPlayer()]);
  };

  const [players, setPlayers] = useState<Player[]>([createPlayer()]);

  return (
    <Page>
      <PlayersContainer>
        {players.map((player, index) => (
          <Player color={colors[index]}>
            {!player.editingName ? (
              <>
                <div>
                  <span>{player.name || "Unnamed"}</span>
                </div>
                <button
                  onClick={() => changePlayerStat(index, "editingName", true)}
                >
                  Edit name
                </button>
              </>
            ) : (
              <>
                <input
                  value={player.name}
                  placeholder="Enter name"
                  className="player-name"
                  onChange={(e) =>
                    changePlayerStat(index, "name", e.target.value)
                  }
                />
                <button
                  onClick={() => changePlayerStat(index, "editingName", false)}
                >
                  Confirm
                </button>
              </>
            )}

            <div
              className="player-img-container"
              onClick={() => changeGender(index)}
            >
              <img
                className="player-img"
                src={
                  process.env.PUBLIC_URL + "/munchkin/" + player.gender + ".png"
                }
                alt={"munchkin-" + player.gender}
              />
            </div>
            <div className="stats">
              <div>
                <button
                  onClick={() =>
                    changePlayerStat(index, "level", player.level + 1)
                  }
                >
                  {"\u2191"}
                </button>
                <div>{player.level}</div>
                <div>Level</div>
                <button
                  onClick={() =>
                    changePlayerStat(index, "level", player.level - 1)
                  }
                >
                  {"\u2193"}
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    changePlayerStat(index, "strength", player.strength + 1)
                  }
                >
                  {"\u2191"}
                </button>
                <div>{player.strength}</div>
                <div>Strength</div>
                <button
                  onClick={() =>
                    changePlayerStat(index, "strength", player.strength - 1)
                  }
                >
                  {"\u2193"}
                </button>
              </div>
            </div>
          </Player>
        ))}
        <button onClick={addPlayer}>Add player</button>
      </PlayersContainer>
    </Page>
  );
}

const Page = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@200;400&display=swap");
  padding: 20px;
  min-height: 100vh;
  background-color: #ffe5cc;
  * {
    font-family: "Grenze Gotisch", cursive;
    font-size: 22px;
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Player: any = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 0px 3px 3px #ccc;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 200px;
  background-color: #fff2e6;
  .player-img-container {
    padding: 8px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: ${(props) => props.color};
  }
  .player-img {
    height: 100px;
  }
  .player-name {
    width: 100%;
  }
  .stats {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        &:first-of-type {
          padding-top: 4px;
        }
        padding-bottom: 4px;
      }
      button {
        height: 40px;
        width: 40px;
        font-size: 20px;
      }
    }
  }
`;
