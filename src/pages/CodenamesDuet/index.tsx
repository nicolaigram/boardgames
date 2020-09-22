import styled from "@emotion/styled";
import React from "react";

export default function index() {
  const words = [
    "Wizard",
    "Noah",
    "Sign",
    "Hamburger",
    "Parrot",
    "Bicycle",
    "Tornado",
    "Virus",
    "Map",
    "Battle",
    "Battleship",
    "Snake",
    "Sticker",
    "Valentine",
    "Cloud",
    "Steam",
    "Beard",
    "Bunk",
    "Second",
    "Chain",
    "Werewolf",
    "Roll",
    "Powder",
    "Glacier",
    "Musketeer",
  ];
  return (
    <StyledPage>
      <div className="board">
        {words.map((word) => (
          <div className="word">
            <span>{word}</span>
          </div>
        ))}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    height: 600px;
    .word {
      border: 1px solid black;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 16%;
      margin: 5px;
    }
  }
`;
