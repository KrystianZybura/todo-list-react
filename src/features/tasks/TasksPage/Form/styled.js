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

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px;
  border: none;
  transition: all 0.3s;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.06);
    cursor: pointer;
  }

  &:active {
    filter: brightness(140%);
  }
`;

export { StyledForm, Button };
