import styled from 'styled-components';

export const CategoryListStyle = styled.div`
  display: grid;
  grid-template-areas:
    'property property property transport transport transport food food doc doc currency currency'
    'excursions excursions job job taxi taxi buy buy buy service service service';
  gap: 20px;
  width: 100%;
  height: 310px;
`;
