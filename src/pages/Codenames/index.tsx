import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExternalData from "./ExternalData";
import { red } from "./util/colors";

export default function Codenames() {
  const [language, setLanguage] = useState("da");
  const [version, setVersion] = useState("standard");

  return (
    <StyledPage>
      <h1>Settings</h1>
      <div className="columns">
        <div className="col options">
          <h2>Language</h2>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className={"option" + (language === "da" ? " active" : "")}
            onClick={() => setLanguage("da")}
          >
            Danish
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className={"option" + (language === "en" ? " active" : "")}
            onClick={() => setLanguage("en")}
          >
            English
          </motion.div>
        </div>
        <div className="col options">
          <h2>Version</h2>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className={"option" + (version === "standard" ? " active" : "")}
            onClick={() => setVersion("standard")}
          >
            Standard
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className={"option" + (version === "duet" ? " active" : "")}
            onClick={() => setVersion("duet")}
          >
            Duet
          </motion.div>
        </div>
      </div>
      <h1>Game</h1>
      <div className="columns">
        <div className="col">
          <h2>Tools</h2>
          <Link to={`/codenames/keycard/${version}`}>KeyCard</Link>
        </div>
        <div className="col">
          <h2>Board</h2>
          <Link to={`/codenames/game/${version}/${language}/default`}>
            Standard
          </Link>
          <Link to={`/codenames/game/${version}/${language}/deep`}>
            Deep Undercover
          </Link>
          <ExternalData language={language} version={version} />
        </div>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 40px 0 80px;
  background: center url(${process.env.PUBLIC_URL}/codenames/bg.jpeg);
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  h1 {
    font-size: 50px;
    margin: 10px;
    text-align: center;
    color: white;
    -webkit-text-stroke: 1px black;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  }
  .columns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.75);
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
    input {
      margin-bottom: 20px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
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
      background: radial-gradient(rgb(25, 25, 25), rgb(0, 0, 0));
      border-radius: 8px;
      margin-bottom: 20px;
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: 30px;
      text-align: center;
      user-select: none;
      cursor: pointer;
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
