import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledPage>
      <Link to="/king-of-new-york">King of New York</Link>
      <Link to="/star-realms">Star Realms</Link>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  min-height: 100vh;
  a {
    --link-color: rgb(255, 255, 255);
    --link-color-hover: rgb(150, 150, 150);
    --link-border-color: #333;
    --link-text-color: black;
    padding: 12px;
    border-radius: 8px;
    font-size: 32px;
    background-color: var(--link-color);
    border: 1px solid var(--link-border-color);
    color: var(--link-text-color);
    text-decoration: none;
    margin-bottom: 16px;
    &:hover {
      background-color: var(--link-color-hover);
    }
  }
`;
