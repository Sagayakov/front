import { Burger } from "shared/ui/icons/icons-tools/Burger"
import { ButtonAllCategoriesStyle } from "./ButtonAllCategories.style"

export const ButtonAllCategories = () => {
    return <ButtonAllCategoriesStyle>
        <Burger color="white"/>
        Все категории
    </ButtonAllCategoriesStyle>
}