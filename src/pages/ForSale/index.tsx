import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Board from "./Board";
import Card from "./Card";
import Player from "./Player";
const ENDPOINT = "http://192.168.8.105:4001";

export default function Home() {
  const [socket, setSocket] = useState<any>(null);
  const [player, setPlayer] = useState({ id: "", money: 0, cards: [] });
  const [players, setPlayers] = useState([]);
  const [currentBid, setCurrentBid] = useState(0);
  const [table, setTable] = useState([]);
  const [info, setInfo] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isBoard, setIsBoard] = useState(false);

  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("is-board", () => {
      setIsBoard(true);
    });

    socket.on("reset-bids", () => {
      setCurrentBid(0);
    });

    socket.on("player", (player: any) => {
      console.log(player);
      setPlayer(player);
    });

    socket.on("players", (playersResponse: any) => {
      setPlayers(playersResponse);
    });

    socket.on("info", (msg: any) => {
      setInfo(msg);
    });

    socket.on("table", (data: any) => {
      console.log(data);
      setTable(data);
    });

    socket.on("game-state", (data: boolean) => {
      setIsStarted(data);
    });
  }, [socket]);

  const changeBid = (type: any) => {
    if (type === "increase") {
      setCurrentBid((c) => {
        if (c < player.money) {
          return c + 1;
        } else {
          return c;
        }
      });
    } else {
      setCurrentBid((c) => {
        if (c > 0) {
          return c - 1;
        } else {
          return c;
        }
      });
    }
  };

  const sendBid = () => {
    socket.emit("bid", currentBid);
  };

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

        <p>current bid: {currentBid}</p>
        <button onClick={() => changeBid("increase")}>UP</button>
        <button onClick={() => changeBid("decrease")}>DOWN</button>
        <button onClick={sendBid}>BID</button>
        <button onClick={() => socket.emit("pass")}>PASS</button>
      </div>

      {!isStarted && (
        <>
          <button onClick={() => socket.emit("start-game")}>Start Game</button>
          <button onClick={() => socket.emit("is-board")}>Board</button>
        </>
      )}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  background-color: #b5d3e7;
  padding-top: 40px;
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
`;
