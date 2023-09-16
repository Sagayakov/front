import { toggleModalEnter } from 'Features/ModalAuth/model/reducer/toggleModal';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { ButtonEnterRegistrationStyle } from './ButtonEnterRegistration.style';

export const ButtonEnterRegistration = () => {
  const toggleModal = useAppSelector((state) => state.toggleModalEnter.toggle);
  const dispatch = useAppDispatch();

  const handleToggleModal = () => {
    dispatch(toggleModalEnter(!toggleModal));
  };

  return (
    <ButtonEnterRegistrationStyle onClick={handleToggleModal}>
      Вход/Регистрация
    </ButtonEnterRegistrationStyle>
  );
};
