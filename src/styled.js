import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export { StyledNavlink, UnorderedList };
