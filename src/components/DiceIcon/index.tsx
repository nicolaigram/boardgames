import React from "react";
import styled from "@emotion/styled";

export default function DiceIcon({
  name,
  amount,
  rule,
}: {
  name: string;
  amount: number;
  rule: string;
}) {
  const url = "/boardgames/dice/" + name;
  const size = 50;
  return (
    <RuleContainer>
      {Array(amount)
        .fill(0)
        .map((_: any, index: any) => (
          <img
            src={url}
            alt={name}
            style={{ marginRight: "10px" }}
            height={size}
            width={size}
          />
        ))}
      <p>{rule}</p>
    </RuleContainer>
  );
}

const RuleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
