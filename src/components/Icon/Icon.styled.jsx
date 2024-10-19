import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.svg`
  height: 6em;
  width: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  ${props =>
    props.animated &&
    css`
      &:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
      @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} infinite 20s linear;
      }
    `}
`;
