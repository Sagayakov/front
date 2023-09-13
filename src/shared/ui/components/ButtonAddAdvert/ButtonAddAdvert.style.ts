import styled from 'styled-components';

export const ButtonAddAdvertStyle = styled.button`
  width: 262px;
  height: 48px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  background-color: var(--main-blue);
  cursor: pointer;
  display: flex;
  color: var(--white);
  align-items: center;
  justify-content: center;
  & > svg {
    margin-right: 8px;
  }
`;
