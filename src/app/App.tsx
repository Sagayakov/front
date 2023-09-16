import { Footer } from 'Features/Footer/Footer';
import { PopularAdverts } from 'Features/PopularAdverts/PopularAdverts';
import { CategoryBlock } from 'entities/CategoryBlock/CategoryBlock';
import { PaginationBlock } from 'entities/PaginationBlock/PaginationBlock';
import { useState } from 'react';
import { Controls } from '../Features/Controls/Controls';
import { Header } from '../Features/Header/Header';
import './styles/index.css';

export const App = () => {
  return (
    <>
      <Header />
      <Controls />
      <CategoryBlock />
      <PopularAdverts />
      <PaginationBlock />
      <Footer />
    </>
  );
};
