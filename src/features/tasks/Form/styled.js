import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    font-size: 15px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #d1d1d1;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.defaultButton};
  color: #fff;
  padding: 10px;
  border: none;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.defaultButtonHover};
    transform: scale(1.06);
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.defaultButtonActive};
  }
`;

export { StyledForm, Input, Button };
