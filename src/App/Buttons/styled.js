import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #008080;
  border: none;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    color: hsl(180, 100%, 35%);
    cursor: pointer;
  }

  &:disabled {
    color: #cacaca;
  }
`;

export { Button, Container };
