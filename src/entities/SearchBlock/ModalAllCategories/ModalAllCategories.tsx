import { ArrowRight } from 'shared/ui/icons/icons-tools/ArrowRight';
import { ModalAllCategoriesDiv } from './ModalAllCategories.style';
import { ModalCategoriesWrapper } from './ModalCategoriesWrapper.style';

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalAllCategories = ({ showModal, setShowModal }: Props) => {
  const allCategories = [
    'Аренда недвижимости',
    'Аренда транспорта',
    'Валютные пары',
    'Документы',
    'Домашняя еда',
    'Мероприятия',
    'Покупка/продажа',
    'Работа',
    'Такси',
    'Услуги',
    'Экскурсии',
  ];
  return (
    <ModalCategoriesWrapper
      display={showModal ? 'block' : 'none'}
      onClick={() => setShowModal(false)}>
      <ModalAllCategoriesDiv onClick={(event) => event.stopPropagation()}>
        {allCategories.map((elem) => (
          <div
            style={{
              width: '200px',
              height: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              marginBottom: '24px'
            }}
            key={elem}>
            {elem}
            <ArrowRight color="#1C1C1E" />
          </div>
        ))}
      </ModalAllCategoriesDiv>
    </ModalCategoriesWrapper>
  );
};
