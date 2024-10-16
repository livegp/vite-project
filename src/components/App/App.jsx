import { Global } from '@emotion/react';
import { useState } from 'react';
import reactLogo from '/src/assets/icons/react.svg';
import viteLogo from '/src/assets/icons/vite.svg';
import ImageVite from '/src/assets/img/vite.png?w=400&quality=75&format=webp';
import { Head } from '../Head.jsx';
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
      <Head />
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
      <img src={ImageVite} alt='Фото' />
    </>
  );
}
