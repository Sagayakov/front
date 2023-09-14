import { Close } from 'shared/ui/icons/icons-tools/Close';
import { ModalDiv } from './ModalDiv.style';
import { ModalEnterRegistrationContent } from './ModalEnterRegistration.style';
import { EnterRegistration } from './EnterRegistration/EnterRegistration.style';
import { EnterRegistrationText } from './EnterRegistration/EnterRegistrationText.style';
import { EnterWrapper } from './FormAuth/EnterWrapper.style';
import { EnterForm } from './FormAuth/EnterForm';
import { RegisterForm } from './FormAuth/RegisterForm';

interface Props {
  activeModalEnter: boolean;
  setActiveModalEnter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEnterRegistration = ({
  activeModalEnter,
  setActiveModalEnter,
}: Props) => {
  return (
    <ModalDiv onClick={() => setActiveModalEnter(!activeModalEnter)}>
      <ModalEnterRegistrationContent
        onClick={(event) => event.stopPropagation()}>
            <div style={{position: 'absolute', top: '16px', right: '16px'}}>
            <Close />
            </div>
            <EnterRegistration>
                <EnterRegistrationText className='active'>Вход</EnterRegistrationText>
                <EnterRegistrationText>Регистрация</EnterRegistrationText>
            </EnterRegistration>
            <EnterForm />
            {/* <RegisterForm /> */}
      </ModalEnterRegistrationContent>
    </ModalDiv>
  );
};
