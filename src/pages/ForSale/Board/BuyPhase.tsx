import React from "react";
import Card from "../Card";

export default function BuyPhase({ table, players }: any) {
  return (
    <>
      <h1>Buying Phase</h1>
      <div className="cards island">
        {table.map((card: any) => (
          <Card card={card} />
        ))}
      </div>
      <table>
        <thead>
          <th>PLAYER</th>
          <th>BID</th>
        </thead>
        <tbody>
          {players
            .sort((a: any, b: any) => b.currentBid - a.currentBid)
            .map((player: any) => (
              <tr className={player.pass ? "pass" : ""}>
                <td>{player.name}</td>
                <td>
                  {player.currentBid > 0 ? player.currentBid + ".000$" : 0}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
