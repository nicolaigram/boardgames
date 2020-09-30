import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Board from "./Board";
import Player from "./Player";
import Bidding from "./Bidding";
import Hand from "./Hand";
import Options from "./Options";
import InfoPage from "./ErrorPages/InfoPage";
const ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://192.168.8.105:4001"
    : "https://forsale.ngram.dk";
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
  const [sales, setSales] = useState([]);

  console.log(process.env.NODE_ENV);

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

    socket.on("reveal-sales", (data: any) => {
      setSales(data);
    });
  }, [socket]);

  if (info)
    return <InfoPage info={info} reset={() => socket.emit("reset-game")} />;
  if (isBoard)
    return (
      <Board
        isStarted={isStarted}
        table={table}
        players={players}
        phase={phase}
        socket={socket}
        sales={sales}
        setSales={setSales}
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

        <Hand
          player={player}
          socket={socket}
          visible={isStarted}
          disabled={sales.length > 0}
          phase={phase}
        />

        <Options socket={socket} visible={!isStarted} />
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
    font-size: 26px;
  }
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 16px;
  }
  .island {
    &:not(:first-of-type) {
      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        background: #ccc;
        margin: 40px 0;
      }
    }
  }
  #reset-btn {
    width: 100%;
  }
`;
