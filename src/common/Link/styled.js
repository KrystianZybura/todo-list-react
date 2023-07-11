import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  ${({ extraHeaderContent }) =>
    extraHeaderContent &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-top: 15px;
        place-self: center;
      }
    `}

  &:hover {
    filter: brightness(120%);
    padding-bottom: 5px;
    border-bottom: 1px solid currentColor;
  }
`;

export { StyledLink };
