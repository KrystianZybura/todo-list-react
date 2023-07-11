import styled, { css } from "styled-components";

const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    gap: 15px;
    margin-top: 15px;
    place-self: center;
  }
`;

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  transition: 0.3s disabled 0s;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:active {
        outline: 2px solid #000;
        outline-offset: 3px;
        border-radius: 1px;
      }

      &:hover {
        filter: brightness(120%);
        cursor: pointer;
      }
    `}

  &:disabled {
    color: ${({ theme }) => theme.colors.disabledButton};
  }
`;

export { Button, Container };
