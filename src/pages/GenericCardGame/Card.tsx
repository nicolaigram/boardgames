import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Card({ card, index }: any) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <StyledCard
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
        >
          <img
            src={process.env.PUBLIC_URL + card.url}
            draggable={false}
            alt=""
          />
        </StyledCard>
      )}
    </Draggable>
  );
}

const StyledCard = styled.div`
  flex: 0 0 200px;
  img {
    height: 100%;
    width: 100%;
  }
`;
