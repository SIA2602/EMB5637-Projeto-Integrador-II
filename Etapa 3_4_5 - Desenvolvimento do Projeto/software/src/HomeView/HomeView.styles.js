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