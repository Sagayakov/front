import styled from "styled-components";
interface Props {
    display: string
}
export const ModalCategoriesWrapper = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    display: ${props => props.display};
    position: absolute;
    top: 0;
    left: 0;

`