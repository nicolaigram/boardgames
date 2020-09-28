import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blue, green_gradient, green_light, red, sand } from "../util/colors";
import { getKeys, KeyState } from "./util/keys";

export default function KeyCard() {
  const { version, preset } = useParams<any>();
  const [keys, setKeys] = useState<KeyState[]>([]);
  const [gameId, setGameId] = useState("");
  const [urlForFriend, setUrlForFriend] = useState("");
  const [hideUrl, setHideUrl] = useState(false);

  useEffect(() => {
    if (preset) {
      let data = JSON.parse(atob(preset));
      setKeys(data);
    }
  }, []);

  const resetGame = (e: any) => {
    e.preventDefault();
    const [generatedKeys, url] = getKeys(gameId, version);
    if (!generatedKeys) return;
    if (url) setUrlForFriend(url);
    setKeys(generatedKeys);
    setHideUrl(false);
  };

  const handleCopy = () => {
    copy(urlForFriend);
    setHideUrl(true);
  };

  return (
    <StyledPage>
      {!hideUrl && urlForFriend && (
        <div
          className="url-share"
          style={{ width: "100%", wordBreak: "break-all" }}
        >
          {urlForFriend}
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}

      <div className="is-started">
        <button id="newGame" onClick={resetGame}>
          Nyt spil
        </button>
        <div className="keys">
          {keys.map((key) => (
            <div className={"key " + key} />
          ))}
        </div>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background: url(${process.env.PUBLIC_URL}/codenames/wooden-table-bg.jpg);

  .url-share {
    background: white;
  }

  button#newGame {
    margin-bottom: 20px;
  }
  form {
    input {
      margin-bottom: 20px;
      height: 40px;
    }
  }
  .keys {
    @media all and (orientation: landscape) {
      width: 90vh;
      height: 70vh;
    }
    @media all and (orientation: portrait) {
      width: 90vw;
      height: 70vw;
    }

    display: flex;
    flex-wrap: wrap;
    .key {
      flex: 1 0 18%;
      border: 1px solid black;
      margin: 0.5%;
      border-radius: 8px;
      &.BYSTANDER {
        background: ${sand};
      }
      &.ASSASSIN {
        background: black;
      }
      &.SPY {
        background: ${green_gradient};
      }
      &.RED {
        background: ${red};
      }
      &.BLUE {
        background: ${blue};
      }
    }
  }
`;
