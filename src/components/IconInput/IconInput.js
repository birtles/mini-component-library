import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconSizes = {
  small: 16,
  large: 24,
};

const IconStrokeWidths = {
  small: 1,
  large: 2,
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <div>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Group size={size} width={width}>
        <Icon
          id={icon}
          size={IconSizes[size]}
          strokeWidth={IconStrokeWidths[size]}
        />
        <TextInput type="text" placeholder={placeholder} />
      </Group>
    </div>
  );
};

const BorderWidths = {
  small: 1,
  large: 2,
};

const GapSizes = {
  small: 8,
  large: 12,
};

const FontSizes = {
  small: 14,
  large: 18,
};

const Group = styled.label`
  display: flex;
  align-items: center;
  gap: ${(props) => GapSizes[props.size]}px;
  border-bottom: ${(props) => BorderWidths[props.size]}px solid ${COLORS.black};
  padding: 3px 0;
  width: ${(props) => props.width}px;
  color: ${COLORS.gray700};
  font-size: ${(props) => FontSizes[props.size] / 16}rem;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 1px;
  }
`;

const TextInput = styled.input`
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  overflow: hidden;

  &::placeholder {
    color: ${COLORS.gray500};
    opacity: 1;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

export default IconInput;
