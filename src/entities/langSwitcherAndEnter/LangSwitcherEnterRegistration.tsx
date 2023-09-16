
import { LanguageSwitcher } from 'entities/LanguageSwitcher/LanguageSwitcher';
import { ButtonEnterRegistration } from 'shared/ui/components/buttonEnterRegistration/ButtonEnterRegistration';
import { LangSwitcherAndEnterRegistrationStyle } from './LangSwitcherAndEnterRegistration.style';
import { ModalWindowAuth } from 'Features/ModalAuth/ModalWindowAuth';

export const LangSwitcherAndEnterRegistration = () => {
  return (
    <LangSwitcherAndEnterRegistrationStyle>
      <LanguageSwitcher />
      <ButtonEnterRegistration />
      <ModalWindowAuth />
    </LangSwitcherAndEnterRegistrationStyle>
  );
};
