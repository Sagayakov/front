import { LocationSelect } from "shared/ui/components/Location/LocationSelect"
import { LocationBlockStyle } from "./LocationBlock.style"
import { MapIcon } from "shared/ui/icons/icons-tools/MapIcon"

export const LocationBlock = () => {
    return (
      <LocationBlockStyle>
        <MapIcon color="#1F6FDE" />
        <LocationSelect />
      </LocationBlockStyle>
    );
}