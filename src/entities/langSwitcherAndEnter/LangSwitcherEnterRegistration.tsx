import { LanguageSwitcher } from "entities/LanguageSwitcher/LanguageSwitcher"
import { LangSwitcherAndEnterRegistrationStyle } from "./LangSwitcherAndEnterRegistration.style"
import { ButtonEnterRegistration } from "shared/ui/components/buttonEnterRegistration/ButtonEnterRegistration"

export const LangSwitcherAndEnterRegistration = () => {
    return <LangSwitcherAndEnterRegistrationStyle>
        <LanguageSwitcher />
        <ButtonEnterRegistration />
    </LangSwitcherAndEnterRegistrationStyle>
}