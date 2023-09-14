import styled from "styled-components";

interface Props {
    border: string
}

export const InputForm = styled.input<Props>`
  width: 400px;
  height: 56px;
  padding: 12px 24px 12px 24px;
  border: 1px solid ${props => props.border};
  border-radius: 8px;
  color: var(--main-black);
`;