import styled from "@emotion/styled";
import React from "react";

export default function Card({ card }: any) {
  return (
    <StyledCard>
      <img src={process.env.PUBLIC_URL + card.url} alt="" />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 200px;
  img {
    height: 100%;
    width: 100%;
  }
`;
