import styled from "styled-components"

export const Wrapper = styled.div`
    height: ${props => props.heightBodyCard}vh;
    width: ${props => props.widthCardDesktop}vw;
    text-align: center;  
    margin-top: 16px;

    display: grid;
    align-items: center;
    justify-content: center;    

    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile}vw;   
    }
`
export const ListElements = styled.div``
