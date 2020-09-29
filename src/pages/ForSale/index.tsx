import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Board from "./Board";
import Player from "./Player";
import Bidding from "./Bidding";
import Hand from "./Hand";
const ENDPOINT = "http://192.168.8.105:4001";

export default function Home() {
  const [socket, setSocket] = useState<any>(null);
  const [player, setPlayer] = useState({ id: "", money: 0, cards: [] });
  const [players, setPlayers] = useState([]);
  const [table, setTable] = useState([]);
  const [info, setInfo] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isBoard, setIsBoard] = useState(false);

  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("reconnect_attempt", () => {
      setInfo(`Trying to connect to ${ENDPOINT} ...`);
    });

    socket.on("connect_failed", () => {
      setInfo("Connection failed");
    });

    socket.on("is-board", () => {
      setIsBoard(true);
    });

    socket.on("player", (player: any) => {
      setPlayer(player);
    });

    socket.on("players", (playersResponse: any) => {
      setPlayers(playersResponse);
    });

    socket.on("info", (msg: any) => {
      setInfo(msg);
    });

    socket.on("table", (data: any) => {
      setTable(data);
    });

    socket.on("game-state", (data: boolean) => {
      setIsStarted(data);
    });
  }, [socket]);

  if (info) return <h1>{info}</h1>;
  if (isBoard)
    return <Board isStarted={isStarted} table={table} players={players} />;

  return (
    <StyledPage>
      <div className="container">
        <Player
          updateName={(name: string) => socket.emit("set-name", name)}
          player={player}
        />

        <Bidding socket={socket} player={player} />

        <Hand player={player} />

        {!isStarted && (
          <div
            className="island"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button onClick={() => socket.emit("start-game")}>
              Start Game
            </button>
            <button onClick={() => socket.emit("is-board")}>Board</button>
          </div>
        )}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  background-color: #b5d3e7;
  padding: 10px;
  padding-top: 40px;
  * {
    font-size: 30px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  .island {
    background: rgba(255, 255, 255, 0.6);
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
  }
`;
