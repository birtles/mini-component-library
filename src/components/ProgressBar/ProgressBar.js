import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const ProgressBar = ({ value, size }) => {
  return (
    <Outer
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <Inner value={value} size={size} title={`${value}%`} />
    </Outer>
  );
};

const Outer = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: ${(props) => (props.size === "large" ? "4px" : "0")};
  border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
`;

const HEIGHTS = {
  large: "16px",
  medium: "12px",
  small: "8px",
};

const Inner = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => Math.max(Math.min(props.value, 100), 0)}%;
  height: ${(props) => HEIGHTS[props.size]};
  --right-rounding: ${(props) => Math.max(props.value - 99, 0) * 4}px;
  border-radius: 4px var(--right-rounding) var(--right-rounding) 4px;
`;

export default ProgressBar;
