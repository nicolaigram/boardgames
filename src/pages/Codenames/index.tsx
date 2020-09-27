import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <StyledPage>
      <div className="col">
        <h2>Danish</h2>
        <Link to={"/codenames/game/standard/da/default"}>Standard</Link>
        <Link to={"/codenames/game/duet/da/default"}>Standard (Duet)</Link>
        <Link to={"/codenames/game/standard/da/deep"}>Deep Undercover</Link>
        <Link to={"/codenames/game/duet/da/deep"}>Deep Undercover (Duet)</Link>
      </div>
      <div className="col">
        <h2>English</h2>
        <Link to={"/codenames/game/standard/en/default"}>Standard</Link>
        <Link to={"/codenames/game/duet/en/default"}>Standard (Duet)</Link>
        <Link to={"/codenames/game/standard/en/deep"}>Deep Undercover</Link>
        <Link to={"/codenames/game/duet/en/deep"}>Deep Undercover (Duet)</Link>
      </div>
      <div className="col">
        <h2>Tools</h2>
        <Link to={"/codenames/keycard/duet"}>KeyCard (Duet)</Link>
        <Link to={"/codenames/keycard/standard"}>KeyCard (Standard)</Link>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  .col {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h2 {
      text-align: center;
    }
    a {
      background: black;
      margin-bottom: 20px;
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: 30px;
      text-align: center;
    }
  }
`;
