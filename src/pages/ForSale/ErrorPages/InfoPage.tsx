import styled from "@emotion/styled";
import React from "react";
import Button from "../components/Button";

export default function AlreadyStarted({ info, reset, socket }: any) {
  const handleClick = () => {
    console.log(socket);
    reset();
  };
  return (
    <StyledPage>
      <h1>{info}</h1>
      <Button onClick={handleClick}>Reset Game</Button>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  button {
    flex: 0 0 60px;
    width: 80%;
    max-width: 400px;
  }
`;
