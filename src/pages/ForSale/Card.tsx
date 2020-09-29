import styled from "@emotion/styled";
import React from "react";

export default function Card({
  card,
}: {
  card: { name: string; value: number; id: number };
}) {
  return (
    <StyledCard id={card.id}>
      <div className="image"></div>
    </StyledCard>
  );
}

const padId = (id: number) => {
  let newId = id.toString();
  if (newId.length === 1) return "00" + id;
  if (newId.length === 2) return "0" + id;
  return id;
};

const StyledCard: any = styled.div`
  flex: 0 1 48%;
  border: 1px solid black;
  margin-bottom: 10px;
  background: white;
  height: 380px;
  border-radius: 8px;
  box-shadow: 3px 3px 3px #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
  }
  .image {
    width: 100%;
    height: 100%;
    background: ${(props: any) =>
      `url(${process.env.PUBLIC_URL}/for-sale/homes/tile${padId(
        props.id
      )}.png)`};
    background-size: cover;
    background-position-x: 0px;
    background-position-y: 0px;
  }
`;
