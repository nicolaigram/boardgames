import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <StyledPage>
      <div className="col">
        <h2>Danish</h2>
        <Link to={"/codenames-duet/da/standard"}>Standard</Link>
        <Link to={"/codenames-duet/da/deep"}>Deep Undercover</Link>
      </div>
      <div className="col">
        <h2>English</h2>
        <Link to={"/codenames-duet/en/standard"}>Standard</Link>
        <Link to={"/codenames-duet/en/deep"}>Deep Undercover</Link>
      </div>
      <div className="col">
        <h2>Tools</h2>
        <Link to={"/codenames-duet/keycard"}>KeyCard</Link>
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
