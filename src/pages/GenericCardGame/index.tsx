import React, { useEffect, useState } from "react";
import Card from "./Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
const ENDPOINT = "http://192.168.8.105:4002";

export default function GenericCardGame() {
  const [socket] = useState<any>(require("socket.io-client")(ENDPOINT));
  const [table, setTable] = useState([]);
  const [hand, setHand] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("cards", setTable);
  }, [socket]);

  const handleDragEnd = (result: any, provided: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      // Reorder
      reorder(source.index, destination.index);
    }
    if (source.droppableId !== destination.droppableId) {
      move(source.droppableId, source.index, destination.droppableId);
    }
  };

  const reorder = (sourceIndex: number, destinationIndex: number) => {
    const temp = [...table];
    const [removed] = temp.splice(sourceIndex, 1);
    temp.splice(destinationIndex, 0, removed);

    setTable(temp);
  };

  const move = (
    sourceId: string,
    sourceIndex: number,
    destinationId: string
  ) => {
    const state: any = { table, setTable, hand, setHand };
    const source = [...state[sourceId]];
    const item = source.splice(sourceIndex, 1);
    state[
      "set" +
        sourceId.substr(0, 1).toUpperCase() +
        sourceId.substr(1, sourceId.length)
    ](source);

    state[
      "set" +
        destinationId.substr(0, 1).toUpperCase() +
        destinationId.substr(1, destinationId.length)
    ]((prev: any) => [...prev, ...item]);
  };

  return (
    <StyledPage>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="table" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="card-area cards-on-table"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {table.map((card: any, index) => (
                <Card key={"card-key-" + card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="hand" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="card-area test"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {hand.map((card: any, index) => (
                <Card key={"card-key-" + card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .card-area {
    display: flex;
    /* height: 400px; */
  }
  .cards-on-table {
    background: orange;
  }
  .test {
    background: pink;
  }
`;
