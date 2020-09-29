import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { setInterval } from "timers";
import Card from "../Card";

export default function SellPhase({ table, players, socket }: any) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    if (!socket) return;
    socket.on("reveal-sales", (data: any) => {
      setSales(data);
    });
  });

  useEffect(() => {
    if (!socket) return;
    socket.on("reveal-sales", (data: any) => {
      setSales(data);
    });
  }, [socket]);

  if (sales.length > 1) {
    return (
      <SalesReveal>
        <div className="container">
          {sales.map((sale: any) => (
            <div className="sale">
              <h2>{sale.player.name}</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Card card={sale.card} />
                <Card card={sale.cheque} type="cheques" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setSales([])} id="btn-next">
          Next
        </button>
      </SalesReveal>
    );
  }

  return (
    <>
      <h1>Selling Phase</h1>
      <div className="cards island">
        {table.map((card: any) => (
          <Card card={card} type="cheques" />
        ))}
      </div>
      <table>
        <thead>
          <th>PLAYER</th>
          <th>MONEY</th>
        </thead>
        <tbody>
          {players
            .sort((a: any, b: any) => b.money - a.money)
            .map((player: any) => (
              <tr className={player.pass ? "pass" : ""}>
                <td>{player.name}</td>
                <td>{player.money}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

const SalesReveal = styled.div`
  .container {
    display: flex;
    .sale {
      flex: 0 1 32%;
    }
  }
  #btn-next {
    width: 100%;
    height: 80px;
  }
`;
