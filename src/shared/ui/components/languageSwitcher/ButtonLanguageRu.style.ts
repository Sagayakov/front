import styled from 'styled-components';

export const ButtonLanguageRuStyle = styled.button`
  width: 42px;
  height: 36px;
  border-radius: 8px 0px 0px 8px;
  border: none;
  cursor: pointer;
  background-color: var(--white);
  color: var(--grey-3);
  font-weight: 700;
  &:active {
    background-color: var(--main-background);
    color: var(--main-blue);
  }
`;
