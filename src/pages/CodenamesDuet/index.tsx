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
            <span className="player-north">{card.word}</span>
            <span className="player-south">{card.word}</span>
          </div>
        ))}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: url("/boardgames/codenames-duet/wooden-table-bg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 600px;
    .word {
      font-size: 22px;
      font-weight: 400;
      position: relative;
      background: linear-gradient(#ede1c7 50%, #fff 50%);
      border: 1px solid black;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex: 1 0 16%;
      margin: 5px;
      user-select: none;
      span {
        &.player-north {
          transform: rotateZ(180deg);
          font-style: italic;
        }
      }
      &.guessed {
        background: radial-gradient(#e0dd56, #048403, #004119);
      }
      &.north::before,
      &.south::before,
      &.both::before {
        position: absolute;
        font-size: 28px;
        font-weight: 500;
      }
      &.north::before {
        content: "↑";
      }
      &.south::before {
        content: "↓";
      }
      &.both::before {
        content: "↑↓";
      }
    }
  }
`;
