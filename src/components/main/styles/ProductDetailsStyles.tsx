import styled from "styled-components";

export const FieldSet = styled.fieldset<{ selected: boolean }>`
  position: relative;
  bottom: 9px;
  height: 670px;
  border: 2px solid black;
  display: ${({ selected }) => (selected ? "block" : "flex")};
  justify-content: center;
  align-items: center;
`;

export const InputName = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid black;
  margin-bottom: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 1.2em;
`;

export const TextAreaDescription = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: 2px solid black;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 1.1em;
`;

export const InputPrice = styled.input`
  height: 30px;
  width: 80px;
  border: 2px solid black;
  margin-bottom: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 1.2em;

  ::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

export const Dollar = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  margin-left: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
`;
