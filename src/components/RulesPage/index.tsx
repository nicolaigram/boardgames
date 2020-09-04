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

        <Flex>
          <DiceIcon name="06_star.png" amount={1} rule="Nothing*" />
          <DiceIcon name="06_star.png" amount={3} rule="Take Superstar card" />
        </Flex>

        <div>
          <p>*If you have the Superstar card; x victory points</p>
        </div>
      </Overlay>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;

  &::before {
    background-image: url("/boardgames/bg.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    z-index: -1;
    filter: brightness(50%);
  }
`;

const Overlay = styled.div`
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 50px;
  margin-top: 50px;
`;

const Flex = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }
`;
