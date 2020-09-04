import React from "react";
import DiceIcon from "../DiceIcon";
import styled from "@emotion/styled";

export default function RulesPage() {
  return (
    <Background>
      <Overlay>
        <Flex>
          <DiceIcon name="01_heart.png" amount={1} rule="Heal x" />
          <DiceIcon name="01_heart.png" amount={3} rule="Take power-up card" />
        </Flex>
        <DiceIcon
          name="02_destroy.png"
          amount={1}
          rule="Damage x to buildings or units"
        />
        <DiceIcon name="03_energy.png" amount={1} rule="Take x energy" />
        <DiceIcon
          name="04_skull.png"
          amount={1}
          rule="Units in your borough you damage you"
        />
        <DiceIcon
          name="04_skull.png"
          amount={2}
          rule="+ other monsters in your borough"
        />
        <DiceIcon
          name="04_skull.png"
          amount={3}
          rule="All units damage all monsters + take the Statue of Liberty"
        />
        <Flex>
          <DiceIcon name="05_claw.png" amount={1} rule="Do x damage" />
          <DiceIcon
            name="05_claw.png"
            amount={3}
            rule="Berserk (if using expansion)"
          />
        </Flex>

        <DiceIcon name="06_star.png" amount={1} rule="Nothing*" />
        <DiceIcon name="06_star.png" amount={3} rule="Take Superstar card" />
        <div>
          <p style={{ color: "white" }}>
            *If you have the Superstar card; x victory points
          </p>
        </div>
      </Overlay>
    </Background>
  );
}

const Background = styled.div`
  background: url("/boardgames/bg.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 50px;
`;

const Overlay = styled.div`
  padding: 25px;
  background: rgba(0, 0, 0, 0.8);
`;

const Flex = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }
`;
