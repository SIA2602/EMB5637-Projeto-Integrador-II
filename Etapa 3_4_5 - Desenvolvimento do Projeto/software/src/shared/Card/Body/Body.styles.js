import styled from "styled-components"

export const Wrapper = styled.div`    
    width: ${props => props.widthCardDesktop}vw;
    text-align: center;  
    margin-top: 24px;
    display: grid;
    align-items: center;
    justify-content: center;    

    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile}vw;   
    }
`
export const ListElements = styled.div``
