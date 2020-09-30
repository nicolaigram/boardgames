import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

export default function Button(props: any) {
  return (
    <StyledButton
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1.05 }}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  height: 60px;
  margin-bottom: 6px;
  flex: 1 0 45%;
  background-color: white;
  border: 1px solid #333;
  border-radius: 12px;
  text-transform: uppercase;
  outline: 0;
  &:nth-of-type(odd) {
    &:not(:last-of-type) {
      margin-right: 6px;
    }
  }
`;
