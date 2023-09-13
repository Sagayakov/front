import { Find } from "shared/ui/icons/icons-tools/Find"
import { SearchBlockStyle } from "./SearchBlock.style"
import { InputSearch } from "shared/ui/components/inputSearch/InputSearch"

export const SearchBlock = () => {
    return <SearchBlockStyle>
        <Find />
        <InputSearch />
    </SearchBlockStyle>
}