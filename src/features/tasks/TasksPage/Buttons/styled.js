import styled, { css } from "styled-components";

const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    align-items: center;
  }
`;

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  transition: 0.3s;

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        filter: brightness(120%);
        cursor: pointer;
      `}
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.buttonDisabled};
  }
`;

export { Button, Container };
