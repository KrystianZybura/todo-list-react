import styled, { css } from "styled-components";

const List = styled.ul`
  margin-top: -10px;
  padding: 0;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 33px 1fr 33px;
  grid-gap: 10px;
  align-items: center;
  word-break: break-word;
  border-bottom: 1px solid #b3b3b3;
  padding: 17px 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const Button = styled.button`
  display: grid;
  place-items: center;
  background-color: #dc143c;
  color: #fff;
  border: none;
  height: 33px;
  font-size: 16px;

  &:hover {
    background-color: #ee4466;
    cursor: pointer;
  }

  &:active {
    outline: 2px solid #000;
  }

  ${({ done }) =>
    done &&
    css`
      font-size: 19px;
      background-color: #008000;

      &:hover {
        background-color: #00a800;
        cursor: pointer;
      }
    `}
`;

export { List, Item, Content, Button };
