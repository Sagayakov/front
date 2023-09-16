import styled from "styled-components";

interface Props {
    bordercolor: string
    color: string
}

export const ModalHeader = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
`

export const ModalHeaderName = styled.div<Props>`
    width: 162px;
    height: 40px;
    font-size: 26px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid ${props => props.bordercolor};
    color: ${props => props.color};
`