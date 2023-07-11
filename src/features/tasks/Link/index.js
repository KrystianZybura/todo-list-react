import { StyledLink } from "./styled";

const Link = ({ url, content, specialLink }) => (
  <StyledLink to={url} special={specialLink ? "exists" : undefined}>
    {content}
  </StyledLink>
);

export default Link;
