import styled from "styled-components";

export const Wrapper = styled.header`
    height: 5vh;
    width: 20vw;   
    margin-right: 24px;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 0px 0px #E8E8E8;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    padding: 16px;
    font-size: 15px;
    font-weight: 400;

    display: flex;
    align-items: center;

    @media (max-width: 1200px)
    {
        width: 65vw;   
    }

    position: relative;
`

export const Button = styled.button`
    height: 3.1vh;
    width: 3.1vh;

    position: absolute;
    right: 0; 
    margin-right: 16px;        
`