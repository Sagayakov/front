import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { Close } from 'shared/ui/icons/icons-tools/Close';
import { FormAuth } from './FormAuthEnter/FormAuth';
import { FormWrapper } from './FormWrapper.style';
import { ModalHeader, ModalHeaderName } from './ModalHeader/ModalHeader.style';
import { ModalWindowAuthDiv } from './ModalWindowAuth.style';
import { ModalWindowAuthWrapper } from './ModalWindowAuthWrapper.style';
import { toggleModalEnter } from './model/reducer/toggleModal';

export const ModalWindowAuth = () => {
  const showModal = useAppSelector((store) => store.toggleModalEnter.toggle);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(dispatch(toggleModalEnter(!showModal)));

  return (
    <ModalWindowAuthWrapper
      display={showModal ? 'block' : 'none'}
      onClick={handleClick}>
      <ModalWindowAuthDiv onClick={(event) => event.stopPropagation()}>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Close onclick={handleClick} />
        </div>
        <ModalHeader>
          <ModalHeaderName bordercolor="#1C1C1E" color="#1C1C1E">
            Вход
          </ModalHeaderName>
          <ModalHeaderName bordercolor="transparent" color="#BCBCBC">
            Регистрация
          </ModalHeaderName>
        </ModalHeader>
        <FormWrapper>
          <FormAuth />
        </FormWrapper>
      </ModalWindowAuthDiv>
    </ModalWindowAuthWrapper>
  );
};
