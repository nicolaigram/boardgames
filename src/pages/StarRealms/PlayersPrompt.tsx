import styled from "@emotion/styled";
import React from "react";

export default function PlayersPrompt({ display, setPlayerCount }: any) {
  if (!display) return null;
  return (
    <StyledPrompt>
      <p>How many players?</p>
      <div>
        <button onClick={() => setPlayerCount(2)}>2</button>
        <button onClick={() => setPlayerCount(3)}>3</button>
        <button onClick={() => setPlayerCount(4)}>4</button>
      </div>
    </StyledPrompt>
  );
}

const StyledPrompt = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  height: 90vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  button {
    height: 80px;
    width: 100px;
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;
