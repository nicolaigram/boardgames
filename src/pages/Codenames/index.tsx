import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { red } from "./util/colors";

export default function Codenames() {
  const [language, setLanguage] = useState("da");
  const [version, setVersion] = useState("standard");

  return (
    <StyledPage>
      <div className="col options">
        <h2>Language</h2>

        <div
          className={"option" + (language === "da" ? " active" : "")}
          onClick={() => setLanguage("da")}
        >
          Danish
        </div>
        <div
          className={"option" + (language === "en" ? " active" : "")}
          onClick={() => setLanguage("en")}
        >
          English
        </div>
      </div>
      <div className="col options">
        <h2>Version</h2>
        <div
          className={"option" + (version === "standard" ? " active" : "")}
          onClick={() => setVersion("standard")}
        >
          Standard
        </div>
        <div
          className={"option" + (version === "duet" ? " active" : "")}
          onClick={() => setVersion("duet")}
        >
          Duet
        </div>
      </div>
      <div className="col">
        <h2>Game</h2>
        <Link to={`/codenames/game/${version}/${language}/default`}>
          Standard
        </Link>
        <Link to={`/codenames/game/${version}/${language}/deep`}>
          Deep Undercover
        </Link>
      </div>
      <div className="col">
        <h2>Tools</h2>
        <Link to={`/codenames/keycard/${version}`}>KeyCard</Link>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  .col {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h2 {
      text-align: center;
    }
    a,
    .option {
      background: black;
      margin-bottom: 20px;
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: 30px;
      text-align: center;
    }
  }
  .options {
    background: rgba(0, 0, 0, 0.3);
    padding: 0 10px;
    padding-right: 20px;
    &:not(:nth-of-type(2)) {
      padding-right: 10px;
      margin-right: 0;
    }
    .option {
      &.active {
        color: ${red};
      }
    }
  }
`;
