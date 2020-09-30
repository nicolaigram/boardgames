import styled from "@emotion/styled";
import React from "react";
import BuyPhase from "./BuyPhase";
import SellPhase from "./SellPhase";

export default function Board({
  isStarted,
  players,
  table,
  phase,
  socket,
  sales,
  setSales,
}: any) {
  if (!isStarted)
    return (
      <StyledPage>
        <h1>Waiting to start</h1>
        <div id="game-box">
          <img src={process.env.PUBLIC_URL + "/for-sale/box.jpg"} alt="" />
        </div>
      </StyledPage>
    );
  return (
    <StyledPage>
      <div className="container">
        {phase === "buying houses" && (
          <BuyPhase players={players} table={table} />
        )}
        {phase === "selling houses" && (
          <SellPhase
            players={players}
            table={table}
            socket={socket}
            sales={sales}
            setSales={setSales}
          />
        )}
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background-color: #b5d3e7;
  min-height: 100vh;
  padding-top: 20px;
  h1 {
    text-align: center;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
  }
  table {
    border-spacing: 0;
    th {
      text-align: left;
    }
    width: 100%;
    * {
      font-size: 30px;
    }

    tr {
      &:nth-of-type(odd) {
        background-color: rgba(255, 255, 255, 0.3);
      }
      &.pass {
        * {
          text-decoration: line-through;
        }
      }
      td {
        padding: 4px;
      }
    }
  }
  #game-box {
    width: 600px;
    margin: 0 auto;
    max-width: 80%;
    img {
      width: 100%;
    }
  }
`;
