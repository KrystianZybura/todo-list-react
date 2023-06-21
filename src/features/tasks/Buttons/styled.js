import styled from "styled-components";

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
  color: ${({ theme }) => theme.colors.defaultButton};
  border: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.defaultButtonHover};
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.defaultButtonDisabled};
  }
`;

export { Button, Container };
