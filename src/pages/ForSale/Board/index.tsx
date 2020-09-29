import styled from "@emotion/styled";
import React from "react";
import BuyPhase from "./BuyPhase";
import SellPhase from "./SellPhase";

export default function Board({ isStarted, players, table, phase }: any) {
  if (!isStarted)
    return (
      <StyledPage>
        <h1>Waiting to start</h1>
      </StyledPage>
    );
  return (
    <StyledPage>
      <div className="container">
        {phase === "buying houses" && (
          <BuyPhase players={players} table={table} />
        )}
        {phase === "selling houses" && (
          <SellPhase players={players} table={table} />
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
    width: 100%;
    * {
      font-size: 30px;
    }
    tr.pass {
      * {
        text-decoration: line-through;
      }
    }
  }
`;
