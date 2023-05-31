import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  font-size: 19px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    font-size: 15px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #d1d1d1;
`;

const Button = styled.button`
  background-color: #006e80;
  color: #fff;
  padding: 10px;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #0092a8;
    transform: scale(1.06);
    cursor: pointer;
  }

  &:active {
    background-color: #00acc7;
  }
`;
export { Form, Input, Button };
