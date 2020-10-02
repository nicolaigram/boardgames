import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../ForSale/components/Button";
import { Card, CardState, createCards, getNextCardState } from "../util/cards";
import { blue, green_gradient, red, sand } from "../util/colors";
import Timer from "./Timer";

export default function Codenames() {
  const { language, version, cardset, data } = useParams<{
    language: string;
    version: "standard" | "duet";
    cardset: string;
    data: string;
  }>();

  const [cards, setCards] = useState(createCards(language, cardset, data));
  const [turn, setTurn] = useState(9);

  const toggleCardState = (index: number) => {
    const temp = [...cards];
    temp[index].state = getNextCardState[version](temp[index].state);
    setCards(temp);
  };

  const isGuessed = (card: Card) => {
    if (card.state === CardState.guessedGreen) return true;
    // if (card.state === CardState.guessedSouth) return true;
    return false;
  };

  return (
    <StyledPage>
      <div className="container">
        {version === "standard" && <Timer />}
        {version === "duet" && (
          <div className="turn-counter">
            <div className="buttons">
              <Button onClick={() => setTurn(turn + 1)}>
                <span>↑</span>
              </Button>
              <Button onClick={() => setTurn(turn - 1)}>
                <span>↓</span>
              </Button>
            </div>
            <span>Turns left: {turn}</span>
          </div>
        )}
        <div className="board">
          {cards.map((card, index) => (
            <motion.div
              whileTap={{ scale: 1.1 }}
              className={"word " + card.state}
              onClick={() => toggleCardState(index)}
            >
              {!isGuessed(card) && (
                <>
                  <span className="player-north">{card.word}</span>
                  <span className="player-south">{card.word}</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: url(${process.env.PUBLIC_URL}/codenames/wooden-table-bg.jpg);
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    @media screen and (max-height: 600px) {
      height: 90vh;
    }
  }
  .turn-counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotateZ(-90deg);
    background: rgba(255, 255, 255, 0.3);
    padding: 8px;
    width: 200px;
    span {
      font-size: 30px;
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
    height: 100%;
    .word {
      height: 110px;
      @media screen and (max-height: 600px) {
        font-size: 16px;
      }
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
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        &.player-north {
          transform: rotateZ(180deg);
          font-style: italic;
        }
      }
      &.guessed {
        span {
          display: none;
        }
        &.spy::before {
          background: center url(${process.env.PUBLIC_URL}/codenames/spy.png);
          background-size: contain;
        }
        &.bystander::before {
          background: bottom
            url(${process.env.PUBLIC_URL}/codenames/bystander.png);

          background-size: 45%;
        }
        &.spy::before,
        &.bystander::before {
          opacity: 0.5;
          background-repeat: no-repeat;
          content: "";
          display: block;
          height: 100%;
          width: 100%;
        }

        &.green {
          background: ${green_gradient};
        }
        &.red {
          background: ${red};
        }
        &.blue {
          background: ${blue};
        }
        &.bystander {
          background: ${sand};
        }
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
