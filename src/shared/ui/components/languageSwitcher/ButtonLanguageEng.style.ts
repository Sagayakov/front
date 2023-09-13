import styled from "styled-components";

export const ButtonLanguageEngStyle = styled.button`
  width: 51px;
  height: 36px;
  border-radius: 0px 8px 8px 0px;
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