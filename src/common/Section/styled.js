import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.border};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  padding-top: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
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
