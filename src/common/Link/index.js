import { StyledLink } from "./styled";

const Link = ({ link, content }) => (
  <StyledLink to={link}> {content} </StyledLink>
);

export default Link;
