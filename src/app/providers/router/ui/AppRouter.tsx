import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/about" element={<h1>О сайтеу</h1>} />
      </Routes>
    </Suspense>
  );
};
