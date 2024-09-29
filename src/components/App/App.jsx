import { useState } from 'react';
import viteLogo from '/vite.svg';

import reactLogo from '../../assets/react.svg';

import './App.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} class='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} class='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Bun</h1>
      <div class='card'>
        <button type='button' onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
