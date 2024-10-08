import { Global } from '@emotion/react';
import { useState } from 'react';
import reactLogo from '/src/assets/react.svg';
import viteLogo from '/vite.svg';
import {
  AnimatedLogo,
  Button,
  Card,
  GlobalStyles,
  Logo,
  StyledLink,
  Text,
  Title,
} from './App.styled';

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <div>
        <StyledLink href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <Logo src={viteLogo} alt='Vite logo' />
        </StyledLink>
        <StyledLink href='https://react.dev' target='_blank' rel='noreferrer'>
          <AnimatedLogo src={reactLogo} alt='React logo' />
        </StyledLink>
      </div>
      <Title>Vite + React + Bun</Title>
      <Card>
        <Button type='button' onClick={handleClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>
      <Text>Click on the Vite and React logos to learn more</Text>
    </>
  );
}
