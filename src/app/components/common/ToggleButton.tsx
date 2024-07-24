// app/components/ToggleButton.tsx
import styled from "styled-components";

const Button = styled.button<{ $isExpanded: boolean }>`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${({ $isExpanded }) => ($isExpanded ? "#d1d1d1" : "#e0e0e0")};
  box-shadow: ${({ $isExpanded }) =>
    $isExpanded
      ? "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff"
      : "6px 6px 12px #bebebe, -6px -6px 12px #ffffff"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  }
`;

export default Button;
