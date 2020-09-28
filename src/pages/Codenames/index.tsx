import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { red } from "./util/colors";

export default function Codenames() {
  const [language, setLanguage] = useState("da");
  const [version, setVersion] = useState("standard");

  return (
    <StyledPage>
      <div className="columns">
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
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding-top: 40px;
  background: center url(${process.env.PUBLIC_URL}/codenames/bg.jpeg);
  background-size: cover;
  min-height: 100vh;
  @media screen and (max-width: 750px) {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  }
  .columns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.6);
    max-width: 800px;
    margin: 0 auto;
  }
  .col {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 300;
    h2 {
      text-align: center;
      color: white;
      font-weight: 400;
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
    padding-right: 20px;
    .option {
      &.active {
        color: ${red};
      }
    }
  }
`;
