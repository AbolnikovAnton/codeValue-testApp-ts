import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
  top: 101%;
  font-weight: 700;
`;

export const PrevNext = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
`;

export const ArrowIcon = styled.i`
  margin-left: 5px;
  margin-right: 5px;
`;
