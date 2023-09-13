import { ButtonAddAdvert } from 'shared/ui/components/ButtonAddAdvert/ButtonAddAdvert';
import { LogoHeader } from 'shared/ui/icons/icons-tools/LogoHeader';
import { HeaderStyle } from './Header.style';
import { LangSwitcherAndEnterRegistration } from 'entities/langSwitcherAndEnter/LangSwitcherEnterRegistration';

export const Header = () => {
  return (
    <HeaderStyle>
      <LogoHeader />
      <ButtonAddAdvert />
      <LangSwitcherAndEnterRegistration />
    </HeaderStyle>
  );
};
