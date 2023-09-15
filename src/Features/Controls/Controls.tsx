import { LocationBlock } from 'entities/LocationBlock/LocationBlock';
import { ModalAllCategories } from 'entities/SearchBlock/ModalAllCategories/ModalAllCategories';
import { SearchBlock } from 'entities/SearchBlock/SearchBlock';
import { useState } from 'react';
import { ButtonAllCategories } from 'shared/ui/components/buttonAllCategories/ButtonAllCategories';
import { ControlsStyle } from './Controls.style';

export const Controls = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ControlsStyle>
      <ButtonAllCategories onClick={() => setShowModal(!showModal)} />
      <SearchBlock />
      <LocationBlock />
      <ModalAllCategories showModal={showModal} setShowModal={setShowModal}/>
    </ControlsStyle>
  );
};
