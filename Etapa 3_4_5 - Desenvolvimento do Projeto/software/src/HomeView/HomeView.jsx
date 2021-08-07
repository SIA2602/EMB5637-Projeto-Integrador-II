import React from 'react'
import Card from '../shared/Card/Card'
import { LayoutArea, ScrollingX, Wrapper, ScrollingY, LineBarTest } from './HomeView.styles'
import {TeamOutlined} from '@ant-design/icons';

function HomeView(){
    return <Wrapper>
        <LayoutArea>
            <h2>Ola, Danilo</h2>

            <ScrollingX>
                <Card title={"Thebrain"} icon={<TeamOutlined />}/> 
                <Card title={"Multivac"} icon={<TeamOutlined />}/>
                <Card title={"Hal"} icon={<TeamOutlined />}/>                
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