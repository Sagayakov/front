import styled from "styled-components";

interface Props {
    display: string
}

export const ModalWindowAuthWrapper = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 46px;
    right: 0px;
    display: ${props => props.display};
`