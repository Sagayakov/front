import styled from "styled-components";

export const EnterRegistrationText = styled.span`
    width: 168px;
    height: 40px;
    font-size: 26px;
    font-weight: 400;
    color: var(--grey-2);
    text-align: center;
    cursor: pointer;
    &:active{
        font-weight: 600;
        color: var(--main-black);
        border-bottom: 1px solid var(--main-black);
    }
`