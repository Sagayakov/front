import { ButtonLanguageRu } from 'shared/ui/components/languageSwitcher/ButtonLanguageRu';
import { LanguageSwitcherWrapper } from './LanguageSwitcher.style';
import { ButtonLanguageEng } from 'shared/ui/components/languageSwitcher/ButtonLanguageEng';

export const LanguageSwitcher = () => {
  return <LanguageSwitcherWrapper>
    <ButtonLanguageRu />
    <ButtonLanguageEng />
  </LanguageSwitcherWrapper>;
};
