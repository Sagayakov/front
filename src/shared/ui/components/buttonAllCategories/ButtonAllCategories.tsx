import { Burger } from "shared/ui/icons/icons-tools/Burger"
import { ButtonAllCategoriesStyle } from "./ButtonAllCategories.style"

interface Props {
    onClick: () => void
}

export const ButtonAllCategories = ({onClick}: Props) => {
    return <ButtonAllCategoriesStyle onClick={onClick}>
        <Burger color="white"/>
        Все категории
    </ButtonAllCategoriesStyle>
}