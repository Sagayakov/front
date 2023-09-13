import styled from "styled-components";

export const ButtonAllCategoriesStyle = styled.button`
  height: 48px;
  width: 190px;
  cursor: pointer;
  color: var(--white);
  background-color: var(--main-green);
  border-radius: 8px;
  border: none;
  font-weight: 600;
  display: flex;
  color: var(--white);
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  & > svg {
    margin-right: 8px;
  }
`;