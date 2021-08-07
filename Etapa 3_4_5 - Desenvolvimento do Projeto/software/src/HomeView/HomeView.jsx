import React from 'react'
import Card from '../shared/Card/Card'
import PieChart from '../mocks/pieOptions.json'
import LineChart from '../mocks/lineOptions.json'
import Charts from '../shared/Charts/Charts'
import { LayoutArea, ScrollingX, Wrapper, ScrollingY, LineBarTest } from './HomeView.styles'
import { TeamOutlined } from '@ant-design/icons'

function HomeView(){
    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard
     
    const chartPie = <div><Charts options={PieChart} /></div>
    const chartLine = <div style={{width: '90vw'}}><Charts options={LineChart} /></div>    

    return <Wrapper>
        <LayoutArea>
            <h3>Ola, Danilo</h3>

            <ScrollingX>                
                <Card title={"Thebrain"} icon={<TeamOutlined/>} componentList={['danilo', chartPie]} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/> 
                <Card title={"Multivac"} icon={<TeamOutlined />} componentList={['antonio', 'danilo']} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/>
                <Card title={"Hal"} icon={<TeamOutlined />} componentList={['ana', 'danilo']} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/>   
                <Card title={"Jaguar"} icon={<TeamOutlined />} componentList={['ana', 'danilo']} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/>              
                <Card title={"Tobias"} icon={<TeamOutlined />} componentList={['ana', 'danilo']} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightBodyCard={heightBodyCard} heightHeaderCard={heightHeaderCard}/> 
            </ScrollingX>   

            <ScrollingY>
                {chartLine}
            </ScrollingY>                   
        </LayoutArea> 
               
    </Wrapper>
}

export default HomeView