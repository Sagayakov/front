import styled from "styled-components";

export const InputSearchStyle = styled.input.attrs({
    type: 'search',
    placeholder: 'Найти услугу или товар'
})`
    width: 240px;
    height: 19px;
    border: none;
    outline: none;
    color: var(--main-black);
`