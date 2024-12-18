import { IconStyled } from './Icon.styled';

export const Icon = ({ name, animated, primary }) => (
  <IconStyled
    animated={animated}
    primary={primary}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    aria-label={`Logo ${name}`}
  >
    <use xlinkHref={`spritemap.svg#${name}`} />
  </IconStyled>
);
