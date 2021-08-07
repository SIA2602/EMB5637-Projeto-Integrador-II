import React from 'react'
import Card from '../shared/Card/Card'
import { LayoutArea, ScrollingX, Wrapper, ScrollingY, LineBarTest } from './HomeView.styles'
import {TeamOutlined} from '@ant-design/icons';

function HomeView(){
    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 45    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard

    return <Wrapper>
        <LayoutArea>
            <h2>Ola, Danilo</h2>

            <ScrollingX>
                <Card title={"Thebrain"} icon={<TeamOutlined/>} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/> 
                <Card title={"Multivac"} icon={<TeamOutlined />} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/>
                <Card title={"Hal"} icon={<TeamOutlined />} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/>                
            </ScrollingX>   

            <ScrollingY>
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
            </ScrollingY>                   
        </LayoutArea> 
               
    </Wrapper>
}

export default HomeView