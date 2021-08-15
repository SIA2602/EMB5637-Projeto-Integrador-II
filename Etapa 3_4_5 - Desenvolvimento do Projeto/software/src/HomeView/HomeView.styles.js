import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw; 
    background-color: #E5E5E5;
    
    display: grid;
    align-items: end;
    justify-content: center;      
`

export const Title = styled.h3`    
    width: 100vw;
    display: flex;
    padding-top: 48px;
    padding-left: 24px;        
    font-weight: normal;    
    box-shadow: 0px 1px 0px 0px #CACACA;       
`

export const ScrollingX = styled.div`
    height: auto;    
    width: 100vw;
    padding: 16px;  

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;    
`

export const ScrollingY = styled.div`
    height: 30vh;   
    width: 100vw;
    background-color: white;

    display: grid;
    align-items: center;
    justify-content: center;         

    overflow-y: auto;   
    overflow-x: hidden;  
    
    box-shadow: 0px 0px 5px 0px #CACACA;
`
export const WrapperLineChart = styled.div`
    width: 90vw;
`

export const ImgProfile = styled.img`
    width: 100px;
    height: 100px;
    border: 2px solid #30B4FF;
    border-radius: 100%;
    src: url(${props => props.src});
    margin-bottom: 16px;
`
export const ImgMachine = styled.img`
    width: ${props => props.widthCardDesktop-5}vw; 
    height: ${props => props.widthCardDesktop-5}vw;
    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile-5}vw;   
        height: ${props => props.widthCardMobile-5}vw;
    }            
    src: url(${props => props.src});
    margin-bottom: 16px;
    padding: 16px;
`

export const ListTextUsers = styled.div`
    width: ${props => props.widthCardDesktop}vw;
    @media (max-width: 1200px)
    {
        width: ${props => props.widthCardMobile}vw;   
    } 
    font-size: 12px;
    text-align: left;    
    
    padding: 16px;
`
export const SpaceText = styled.div`
    margin-bottom: 8px;
`
export const LineSeparator = styled.div`
    width: auto;
    height: 2px;
    box-shadow: 0px 1px 0px 0px #E8E8E8;    
    margin-left: 16px;
    margin-right: 16px;   
`
export const Buttom = styled.button`   
    border-radius: 100%;
    background-color: transparent;
    border: transparent;
    color: #30B4FF; 
`