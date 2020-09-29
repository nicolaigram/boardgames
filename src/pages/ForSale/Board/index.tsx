import React from "react";
import Card from "../Card";

export default function Board({ isStarted, players, table }: any) {
  if (!isStarted) return <h1>Waiting to start</h1>;
  return (
    <div>
      <div>
        <h2>Table</h2>
        {table.map((card: any) => (
          <Card card={card} />
        ))}
      </div>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Money</th>
            <th>CurrentBid</th>
            <th>Pass</th>
          </thead>
          <tbody>
            {players.map((player: any) => (
              <tr>
                <td>{player.name}</td>
                <td>{player.money}</td>
                <td>{player.currentBid}</td>
                <td>{player.pass.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
