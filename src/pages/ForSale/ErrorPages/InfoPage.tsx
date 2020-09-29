import styled from "@emotion/styled";
import React from "react";

export default function AlreadyStarted({ info }: { info: string }) {
  return (
    <StyledPage>
      <h1>{info}</h1>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding-top: 20px;
  h1 {
    text-align: center;
  }
`;
