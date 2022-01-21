import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <Collapsed>
        <span>{displayedValue}</span>
        <Icon
          id="chevron-down"
          size={21.5}
          strokeWidth={2}
          role="presentation"
        />
      </Collapsed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  & > * {
    grid-area: 1 / 1 / 2 / 2;
  }
  width: max-content;
`;

const RealSelect = styled.select`
  opacity: 0;
`;

const Collapsed = styled.div`
  color: ${COLORS.gray700};
  display: inline-flex;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  gap: 24px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  appearance: none;
  border: 2px solid transparent;

  ${RealSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${RealSelect}:focus + & {
    border-color: ${COLORS.primary};
  }
`;

export default Select;
