import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledPage>
      <Link to={"/king-of-new-york"}>King of New York</Link>
      <Link to={"/star-realms"}>Star Realms</Link>
      <Link to={"/munchkin"}>Munchkin</Link>
      <Link to={"/codenames-duet/da/standard"}>Codenames Duet - Danish</Link>
      <Link to={"/codenames-duet/en/standard"}>Codenames Duet - English</Link>
      <Link to={"/codenames-duet/keycard"}>Codenames Duet - KeyCard</Link>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 20px 0;
  min-height: 100vh;
  background-image: url(/boardgames/main-bg.gif);
  background-position: center;
  background-size: cover;
  a {
    --link-color: rgba(255, 255, 255, 0.3);
    --link-color-hover: rgba(255, 255, 255, 0.7);
    --link-text-color: black;
    padding: 12px;
    border-radius: 8px;
    font-size: 32px;
    background-color: var(--link-color);
    color: var(--link-text-color);
    text-decoration: none;
    margin-bottom: 16px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      background-color: var(--link-color-hover);
    }
  }
`;
