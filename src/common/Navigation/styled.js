import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    padding-bottom: 5px;
    border-bottom: 2px solid currentColor;
  }

  &.active {
    font-weight: bold;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  list-style: none;
`;

export { StyledNav, StyledNavLink, StyledUl };
