import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { red } from "../Codenames/util/colors";
import Button from "./components/Button";

export default function Options({ socket, visible }: any) {
  const [clickedReset, setClickedReset] = useState(false);
  const handleResetGame = () => {
    if (!clickedReset) {
      setClickedReset(true);
      setTimeout(() => {
        setClickedReset(false);
      }, 3000);
      return;
    }
    socket.emit("reset-game");
    setClickedReset(false);
  };
  return (
    <StyledOptions
      className="island"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Button
        onClick={handleResetGame}
        id="reset-btn"
        className={clickedReset ? "clicked" : ""}
      >
        <span>{!clickedReset ? "Reset" : "Are you sure?"}</span>
      </Button>

      {visible && (
        <>
          <Button onClick={() => socket.emit("is-board")}>
            <span>Board</span>
          </Button>
          <Button onClick={() => socket.emit("start-game")}>
            <span>Start Game</span>
          </Button>
        </>
      )}
    </StyledOptions>
  );
}

const StyledOptions = styled.div`
  #reset-btn {
    transition: 1s background-color;
    &.clicked {
      background-color: #e0352f;
    }
  }
`;
