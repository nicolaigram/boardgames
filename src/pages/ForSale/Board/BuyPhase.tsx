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
          <th>NAME</th>
          {/* <th>Money</th> */}
          <th>BID</th>
          {/* <th>Pass</th> */}
        </thead>
        <tbody>
          {players
            .sort((a: any, b: any) => b.currentBid - a.currentBid)
            .map((player: any) => (
              <tr className={player.pass ? "pass" : ""}>
                <td>{player.name}</td>
                {/* <td>{player.money}</td> */}
                <td>{player.currentBid}</td>
                {/* <td>{player.pass.toString()}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
