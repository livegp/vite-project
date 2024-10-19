import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledLink = styled.a`

`;

export const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
}
`;

export const Card = styled.div`
  padding: 2em;
`;

export const Text = styled.p`
  color: #888;
`;

export const GlobalStyles = css`
:root {
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (prefers-color-scheme: light) {
    color: #213547;
    background-color: #ffffff;
  }
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  }
`;
