import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  width: 49%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 30px;
  border-radius: 25px;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const SortDropdown = styled.select`
  height: 30px;
  padding-left: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Button = styled.button<{
  color?: string;
  isSave?: boolean;
  disabled?: boolean;
}>`
  border-radius: 5px;
  height: 30px;
  width: 75px;
  background-color: ${({ color }) => (color ? color : "greenyellow")};
  cursor: pointer;
  position: ${({ isSave }) => (isSave ? "absolute" : "static")};
  right: 10px;
  bottom: 10px;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  box-shadow: 3px 3px 5px -2px;
`;
