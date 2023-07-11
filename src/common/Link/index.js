import { StyledLink } from "./styled";

const Link = ({ link, content, extraHeaderContent }) => (
  <StyledLink extraHeaderContent={extraHeaderContent} to={link}>
    {content}
  </StyledLink>
);

export default Link;
