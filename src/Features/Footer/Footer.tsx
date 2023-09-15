import { FooterDownWrapper } from 'entities/Footer/FooterDownWrapper.style';
import { FooterTopWrapper } from 'entities/Footer/FooterTopWrapper';
import { Facebook } from 'shared/ui/icons/contacts/Facebook';
import { Telegram } from 'shared/ui/icons/contacts/Telegram';
import { WhatsApp } from 'shared/ui/icons/contacts/WhatsApp';
import { FooterWrapper } from './Footer.style';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopWrapper />
      <div style={{ height: '32.5px' }}>
        <hr style={{ margin: '16px 0px', height: '0.5px' }} />
      </div>
      <FooterDownWrapper>
        <div
          style={{
            width: '100px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Telegram style={{cursor: 'pointer'}}/>
          <WhatsApp style={{cursor: 'pointer'}}/>
          <Facebook style={{cursor: 'pointer'}}/>
        </div>
        admin@gmail.com
      </FooterDownWrapper>
    </FooterWrapper>
  );
};
