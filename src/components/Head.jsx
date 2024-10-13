import { Helmet } from 'react-helmet-async';

export function Head() {
  return (
    <Helmet>
      <html lang='en' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Vite + React + Bun</title>
    </Helmet>
  );
}
