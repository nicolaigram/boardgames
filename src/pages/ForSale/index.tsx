import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Board from "./Board";
import Player from "./Player";
import Bidding from "./Bidding";
import Hand from "./Hand";
import Options from "./Options";
import InfoPage from "./ErrorPages/InfoPage";
const ENDPOINT = "http://192.168.8.105:4001";
const horn = new Audio(process.env.PUBLIC_URL + "/for-sale/party_horn.mp3");

export default function Home() {
  const [socket, setSocket] = useState<any>(null);
  const [player, setPlayer] = useState({ id: "", money: 0, cards: [] });
  const [players, setPlayers] = useState([]);
  const [table, setTable] = useState([]);
  const [info, setInfo] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isBoard, setIsBoard] = useState(false);
  const [phase, setPhase] = useState("");

  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
  }, []);

  const resetGame = () => {
    setInfo("");
    setIsStarted(false);
    setIsBoard(false);
  };

  useEffect(() => {
    horn.play();

    if (!socket) return;

    socket.on("reconnect_attempt", () => {
      setInfo(`Trying to connect to ${ENDPOINT} ...`);
    });

    socket.on("disconnect-all", () => {
      window.location.reload();
    });

    socket.on("connect", () => {
      resetGame();
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

    socket.on("set-phase", (data: string) => {
      setPhase(data);
    });
  }, [socket]);

  if (info) return <InfoPage info={info} />;
  if (isBoard)
    return (
      <Board
        isStarted={isStarted}
        table={table}
        players={players}
        phase={phase}
        socket={socket}
      />
    );

  return (
    <StyledPage>
      <div className="container">
        <Player
          updateName={(name: string) => socket.emit("set-name", name)}
          player={player}
          isStarted={isStarted}
        />

        <Bidding
          socket={socket}
          player={player}
          visible={phase === "buying houses"}
        />

        <Hand player={player} socket={socket} visible={isStarted} />

        <Options socket={socket} visible={!isStarted} />

        <button onClick={() => socket.emit("reset-game")} id="reset-btn">
          Reset Game
        </button>
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
  #reset-btn {
    margin-top: 60px;
    width: 100%;
  }
`;
