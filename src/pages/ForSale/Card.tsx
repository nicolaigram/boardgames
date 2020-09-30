import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

export default function Card({
  card,
  selected,
  onClick,
  type,
}: {
  card: { name: string; value: number };
  selected?: boolean;
  onClick?: any;
  type?: string;
}) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const imgPath = () => {
    if (type === "cheques") {
      return `${process.env.PUBLIC_URL}/for-sale/cheques/tile${padValue(
        card.value
      )}.png`;
    }
    return `${process.env.PUBLIC_URL}/for-sale/homes/tile${padValue(
      card.value
    )}.png`;
  };

  return (
    <StyledCard
      whileTap={{ scale: 1.05 }}
      className={"card" + (selected ? " selected" : "")}
      onClick={handleClick}
    >
      <img src={imgPath()} alt="" />
    </StyledCard>
  );
}

const padValue = (id: number) => {
  let newId = id.toString();
  if (newId.length === 1) return "00" + id;
  if (newId.length === 2) return "0" + id;
  return id;
};

const StyledCard: any = styled(motion.div)`
  flex: 0 1 48%;
  border: 1px solid black;
  margin-bottom: 10px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
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
    user-select: none;
    touch-action: none;
    pointer-events: none;
  }
  &.selected {
    filter: brightness(50%);
  }
`;
