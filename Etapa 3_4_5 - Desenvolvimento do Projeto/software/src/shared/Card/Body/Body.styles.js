import styled from "styled-components"

export const Wrapper = styled.div`
    height: ${props => props.heightBodyCard}vh;
    width: ${props => props.widthCardDesktop}vw;    
    border: 1px solid #000000;    

    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile}vw;   
    }
`