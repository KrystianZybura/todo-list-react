import { AUTHOR_PAGE, DEFAULT_ROUTE } from "../../routes/routePaths";
import { StyledNav, StyledNavLink, StyledUl } from "./styled";

const Navigation = () => (
  <StyledNav>
    <StyledUl>
      <li>
        <StyledNavLink to={DEFAULT_ROUTE}>Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={AUTHOR_PAGE}>O autorze</StyledNavLink>
      </li>
    </StyledUl>
  </StyledNav>
);

export default Navigation;
