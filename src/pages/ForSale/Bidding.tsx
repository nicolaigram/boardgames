import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export default function Bidding({ socket, player, visible }: any) {
  const [currentBid, setCurrentBid] = useState(0);

  useEffect(() => {
    if (!socket) return;
    socket.on("reset-bids", () => {
      setCurrentBid(0);
    });
  }, []);

  const sendBid = () => {
    socket.emit("bid", currentBid);
  };

  const changeBid = (type: any) => {
    if (type === "increase") {
      setCurrentBid((c) => {
        if (c < player.money) {
          return c + 1;
        } else {
          return c;
        }
      });
    } else {
      setCurrentBid((c) => {
        if (c > 0) {
          return c - 1;
        } else {
          return c;
        }
      });
    }
  };

  const isDisabled = () => {
    return player.pass;
  };

  if (!visible) return null;

  return (
    <StyledPage className="island">
      {!isDisabled() && (
        <p>Current bid: {currentBid === 0 ? "--" : currentBid + ".000$"}</p>
      )}
      {isDisabled() && (
        <>
          <p>You passed.</p> <p>Wait for the next round</p>
        </>
      )}
      <div className="buttons">
        <button
          onClick={() => changeBid("increase")}
          id="up"
          disabled={isDisabled()}
        >
          UP
        </button>

        <button onClick={sendBid} id="bid" disabled={isDisabled()}>
          BID
        </button>

        <button
          onClick={() => changeBid("decrease")}
          id="down"
          disabled={isDisabled()}
        >
          DOWN
        </button>

        <button
          onClick={() => socket.emit("pass")}
          id="pass"
          disabled={isDisabled()}
        >
          PASS
        </button>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  .buttons {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    button {
      height: 60px;
      flex: 0 0 48%;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.8);
      border: 0;
      border-radius: 8px;
    }
  }
`;
