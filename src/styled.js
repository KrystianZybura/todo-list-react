import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Navigation = styled.nav`
  background-color: teal;
  padding: 10px;
`;

const StyledNavlink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  list-style: none;
`;

export { Navigation, StyledNavlink, UnorderedList };
