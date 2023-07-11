import { StyledNav, StyledNavLink, StyledUl } from "./styled";

const Navigation = () => (
  <StyledNav>
    <StyledUl>
      <li>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </li>
    </StyledUl>
  </StyledNav>
);

export default Navigation;
