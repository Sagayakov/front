import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Button } from 'shared/ui/Button/Button';

export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Button />
            </h1>
          }
        />
        <Route path="/about" element={<h1>О сайтеу</h1>} />
      </Routes>
    </Suspense>
  );
};
