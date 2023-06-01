import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 1px #b3b3b3;
  font-size: 17px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 2px solid #b3b3b3;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 23px;
  margin: 0;
`;

const Body = styled.div`
  padding: 30px 20px;
`;

export { StyledSection, Header, Title, Body };
