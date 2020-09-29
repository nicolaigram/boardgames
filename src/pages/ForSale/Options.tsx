import React from "react";

export default function Options({ socket, visible }: any) {
  if (!visible) return null;
  return (
    <>
      <div
        className="island"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <button onClick={() => socket.emit("start-game")}>Start Game</button>
        <button onClick={() => socket.emit("is-board")}>Board</button>
      </div>
    </>
  );
}
