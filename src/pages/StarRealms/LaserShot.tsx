import styled from "@emotion/styled";
import React from "react";

export default function LaserShot() {
  return <Laser></Laser>;
}

const Laser = styled.div`
  height: 5px;
  width: 50px;
  background-color: red;
  animation: 0.2s shoot forwards linear;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 9;
  box-shadow: 0px 0px 3px white;

  @keyframes shoot {
    0% {
      margin-left: 1000px;
      margin-top: 1000px;
    }
    100% {
      margin-left: 0;
      margin-top: 0;
    }
  }
`;
