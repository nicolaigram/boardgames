import styled from "@emotion/styled";
import React from "react";

export default function Card({
  card,
  selected,
  onClick,
}: {
  card: { name: string; value: number; id: number };
  selected?: boolean;
  onClick?: any;
}) {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <StyledCard
      id={card.id}
      className={selected ? "selected" : ""}
      onClick={handleClick}
    >
      <img
        src={`${process.env.PUBLIC_URL}/for-sale/homes/tile${padId(
          card.id
        )}.png`}
        alt=""
      />
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
  border-radius: 8px;
  box-shadow: 3px 3px 3px #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
  }
  img {
    height: 100%;
    width: 100%;
  }
  &.selected {
    filter: brightness(50%);
  }
`;
