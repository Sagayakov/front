import { LogoHeader } from 'shared/ui/icons/icons-tools/LogoHeader';
import { Pencil } from 'shared/ui/icons/icons-tools/Pencil';
import { FooterTopWrapperStyle } from './FooterTopWrapper.style';

export const FooterTopWrapper = () => {
  return (
    <FooterTopWrapperStyle>
      <LogoHeader style={{cursor: 'pointer'}}/>
      <div
        style={{
          marginLeft: '166px',
          fontWeight: '600',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Pencil color="#02C66E" />
        <span style={{ marginLeft: '34.41px' }}>Пожелания по работе сайта</span>
      </div>
    </FooterTopWrapperStyle>
  );
};
