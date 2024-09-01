import styled from "styled-components";

export const ItemContainer = styled.div<{ selected: boolean }>`
  height: 155px;
  margin-bottom: 20px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${({ selected }) =>
    selected ? "#17b1cf19" : "transparent"};
  cursor: default;
`;

export const ImageAndDescription = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductImage = styled.i<{ color?: string }>`
  font-size: 7em;
  color: ${({ color }) => (color ? color : "black")};
  margin-right: 10px;
`;

export const ItemHeader = styled.div`
  font-size: 2em;
  font-weight: 700;
`;

export const ItemDescription = styled.div`
  font-size: 1.3em;
`;
