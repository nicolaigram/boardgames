import styled from "@emotion/styled";
import React, { useState } from "react";
import { Card, createCards, getNextCardState } from "./util/cards";

export default function CodenamesDuet() {
  const [cards, setCards] = useState(createCards());

  const toggleCardState = (index: number) => {
    const temp = [...cards];
    temp[index].state = getNextCardState(temp[index].state);
    setCards(temp);
  };

  return (
    <StyledPage>
      <div className="board">
        {cards.map((card, index) => (
          <div
            className={"word " + card.state}
            onClick={() => toggleCardState(index)}
          >
            <span>{card.word}</span>
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
      font-size: 20px;
      position: relative;
      background-color: #ede1c7;
      border: 1px solid black;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 16%;
      margin: 5px;
      user-select: none;
      &.guessed {
        background: radial-gradient(#e0dd56, #048403, #004119);
      }
      &.north::before {
        position: absolute;
        top: 10%;
        content: "↑";
      }
      &.south::before {
        position: absolute;
        bottom: 10%;
        content: "↓";
      }
    }
  }
`;
