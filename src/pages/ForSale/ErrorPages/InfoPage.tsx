import styled from "@emotion/styled";
import React from "react";

export default function AlreadyStarted({
  info,
  reset,
}: {
  info: string;
  reset: any;
}) {
  return (
    <StyledPage>
      <h1>{info}</h1>
      <button onClick={reset}>Reset Game</button>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding-top: 20px;
  h1 {
    text-align: center;
  }
`;
