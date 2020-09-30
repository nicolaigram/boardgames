import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { green_med, red } from "../Codenames/util/colors";
import Button from "./components/Button";

export default function Bidding({ socket, player, visible }: any) {
  const [currentBid, setCurrentBid] = useState(0);

  useEffect(() => {
    if (!socket) return;
    socket.on("reset-bids", () => {
      setCurrentBid(0);
    });
  }, [socket]);

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
        <p id="current-bid">
          Current bid: {currentBid === 0 ? "--" : currentBid + ".000$"}
        </p>
      )}
      {isDisabled() && (
        <>
          <p>You passed.</p> <p>Wait for the next round</p>
        </>
      )}
      <div className="buttons">
        <Button
          onClick={() => changeBid("increase")}
          id="up"
          disabled={isDisabled()}
        >
          <span>MORE</span>
        </Button>

        <Button
          onClick={() => changeBid("decrease")}
          id="down"
          disabled={isDisabled()}
        >
          <span>LESS</span>
        </Button>

        <Button onClick={sendBid} id="bid" disabled={isDisabled()}>
          <span>BID</span>
        </Button>

        <Button
          onClick={() => socket.emit("pass")}
          id="pass"
          disabled={isDisabled()}
        >
          <span>PASS</span>
        </Button>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  #current-bid {
    text-align: center;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    #bid {
      background-color: #31bd42;
    }
    #pass {
      background-color: #e0352f;
    }
    #bid,
    #pass {
      flex: 0 0 100%;
    }
  }
`;
