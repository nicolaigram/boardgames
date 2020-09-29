import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export default function Player({ updateName, player }: any) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(player.name);
  }, [player]);

  const handleNameChange = (e: any) => {
    e.preventDefault();
    updateName(name);
  };

  return (
    <StyledPage className="island">
      <form onSubmit={handleNameChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name !== player.name && <button id="set-name">Set name</button>}
      </form>
      <div className="money">
        <span>{player.money}.000$</span>
      </div>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  input,
  button {
    height: 60px;
    width: 100%;
    text-align: center;
  }
  .money {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: green;
  }
`;
