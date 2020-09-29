import React from "react";
import Card from "../Card";

export default function SellPhase({ table, players }: any) {
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
          <th>NAME</th>
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
