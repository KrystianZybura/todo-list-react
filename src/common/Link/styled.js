import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(120%);
    padding-bottom: 5px;
    border-bottom: 1px solid currentColor;
  }
`;

export { StyledLink };
