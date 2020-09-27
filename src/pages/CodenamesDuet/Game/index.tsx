import styled from "@emotion/styled";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardState, createCards, getNextCardState } from "../util/cards";
import { green_gradient, sand } from "../util/colors";

export default function CodenamesDuet() {
  const { language, version } = useParams<any>();

  const [cards, setCards] = useState(createCards(language, version));
  const [turn, setTurn] = useState(9);

  const toggleCardState = (index: number) => {
    const temp = [...cards];
    temp[index].state = getNextCardState(temp[index].state);
    setCards(temp);
  };

  const isGuessed = (card: Card) => {
    if (card.state === CardState.guessed) return true;
    // if (card.state === CardState.guessedSouth) return true;
    return false;
  };

  return (
    <StyledPage>
      <div className="turn-counter">
        <div className="buttons">
          <button onClick={() => setTurn(turn + 1)}>↑</button>
          <button onClick={() => setTurn(turn - 1)}>↓</button>
        </div>
        <span>Turns left: {turn}</span>
      </div>
      <div className="board">
        {cards.map((card, index) => (
          <div
            className={"word " + card.state}
            onClick={() => toggleCardState(index)}
          >
            {!isGuessed(card) && (
              <>
                <span className="player-north">{card.word}</span>
                <span className="player-south">{card.word}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: url(${process.env.PUBLIC_URL}/codenames-duet/wooden-table-bg.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  .turn-counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotateZ(-90deg);
    background: rgba(255, 255, 255, 0.3);
    padding: 8px;
    width: 250px;
    span {
      font-size: 40px;
      text-align: center;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      button {
        height: 80px;
        width: 80px;
        border-radius: 8px;
        border: 0;
        background: #111;
        color: white;
        font-size: 30px;
      }
    }
  }
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 600px;
    .word {
      font-size: 22px;
      font-weight: 400;
      position: relative;
      background: linear-gradient(${sand} 50%, #fff 50%);
      border: 1px solid black;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex: 1 0 16%;
      margin: 5px;
      user-select: none;
      overflow: hidden;
      span {
        &.player-north {
          transform: rotateZ(180deg);
          font-style: italic;
        }
      }
      &.guessed {
        background: ${green_gradient};
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
