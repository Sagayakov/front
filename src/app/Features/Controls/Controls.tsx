import { ButtonAllCategories } from "shared/ui/components/buttonAllCategories/ButtonAllCategories";
import { ControlsStyle } from "./Controls.style"
import { SearchBlock } from "entities/SearchBlock/SearchBlock";
import { LocationBlock } from "entities/LocationBlock/LocationBlock";

export const Controls = () => {
    return (
      <ControlsStyle>
        <ButtonAllCategories />
        <SearchBlock />
        <LocationBlock />
      </ControlsStyle>
    );
}