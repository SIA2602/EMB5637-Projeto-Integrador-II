import styled from "styled-components"

export const Wrapper = styled.div`
    height: ${props => props.heightCard}vh;
    width: ${props => props.widthCardDesktop}vw;   
    margin-right: 24px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    border-radius: 5px;   

    flex: 0 0 auto;

    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile}vw;   
    }   
`