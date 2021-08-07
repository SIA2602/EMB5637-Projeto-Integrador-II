import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LayoutArea = styled.div`
    height: 98vh;
    width: 98vw; 
    
    display: grid;
    align-items: center;
    justify-content: center;

    border: 2px solid #000000;
`

export const ScrollingX = styled.div`
    height: auto;
    width: 95vw;
    padding: 8px;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;      

    border: 2px solid #000000;
`

export const ScrollingY = styled.div`
    height: 30vh;
    width: 95vw;
    padding: 8px;
    background-color: white;

    display: grid;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-y: auto;   
    overflow-x: hidden;         
`

export const LineBarTest = styled.div`
    height: 20px;
    width: 300px;       
    background-color: cyan;
    border-radius: 2px;   
    margin-bottom: 8px;

    flex: 0 0 auto;
`