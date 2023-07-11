import { StyledLink } from "./styled";

const Link = ({ url, content, extraHeaderContent }) => (
  <StyledLink to={url} extraHeaderContent={extraHeaderContent}>
    {content}
  </StyledLink>
);

export default Link;
