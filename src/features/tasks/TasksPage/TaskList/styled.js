import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

const List = styled.ul`
  margin-top: -10px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 33px 1fr 33px;
  grid-gap: 10px;
  align-items: center;
  word-break: break-word;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
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
  background-color: ${({ theme }) => theme.colors.deleteButton};
  color: #fff;
  border: none;
  height: 33px;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deleteButtonHover};
    cursor: pointer;
  }

  &:active {
    outline: 2px solid #000;
  }
`;

const ToggleDoneButton = styled(Button)`
  font-size: 19px;
  background-color: ${({ theme }) => theme.colors.toggleDoneButton};

  &:hover {
    background-color: ${({ theme }) => theme.colors.toggleDoneButtonHover};
    cursor: pointer;
  }
`;

export { List, StyledLink, Item, Content, Button, ToggleDoneButton };
