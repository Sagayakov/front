import { ModalEnterRegistration } from 'Features/ModalEnterRegistration/ModalEnterRegistration';
import { CategoryBlock } from 'entities/CategoryBlock/CategoryBlock';
import { useState } from 'react';
import { Controls } from '../Features/Controls/Controls';
import { Header } from '../Features/Header/Header';
import './styles/index.css';
import { PopularAdverts } from 'Features/PopularAdverts/PopularAdverts';

export const App = () => {
  const [activeModalEnter, setActiveModalEnter] = useState(true);
  return (
    <>
      <Header />
      {/* <ModalEnterRegistration
        activeModalEnter={activeModalEnter}
        setActiveModalEnter={setActiveModalEnter}
      /> */}
      <Controls />
      <CategoryBlock />
      <PopularAdverts />
    </>
  );
};
