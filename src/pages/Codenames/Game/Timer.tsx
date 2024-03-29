import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
export default function Timer() {
  const startTime = 60;
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  // const sounds = {
  //   tick: new Audio(process.env.PUBLIC_URL + "/codenames/alarm-press.mp3"),
  //   alarm: new Audio(process.env.PUBLIC_URL + "/codenames/alarm-bell.mp3"),
  // };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (timeLeft < 1) {
          //   sounds.alarm.play();
          setIsActive(false);
        } else {
          setTimeLeft((timeLeft) => timeLeft - 1);
          //   sounds.tick.play();
        }
      }, 1000);
    } else {
      setTimeLeft(startTime);
    }
  }, [timeLeft, isActive]);

  const toggleTimer = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <TimerStyled
      whileTap={{ scale: 1.1 }}
      onClick={toggleTimer}
      percentage={(timeLeft / startTime) * 100}
    >
      <div className="timeLeft">{timeLeft}</div>
      <div className="timer"></div>
    </TimerStyled>
  );
}

const TimerStyled: any = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100%;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  .timeLeft {
    margin: 0 auto;
    z-index: 99;
    font-size: 30px;
    transform: rotateZ(-90deg);
  }
  .timer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${(props: any) => props.percentage + "%"};
    background: ${(props: any) => {
      const p = props.percentage;
      if (p < 25) {
        return "rgba(150,0,0,0.8)";
      } else if (p < 50) {
        return "rgba(150,150,0,0.8)";
      } else {
        return "rgba(0,150,0,0.8)";
      }
    }};
  }
`;
