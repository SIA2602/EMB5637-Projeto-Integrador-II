import React from 'react'
import Card from '../shared/Card/Card'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, SpaceText, ImgProfile, LineSeparator, ListTextUsers } from './HomeView.styles'
import { RollbackOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

function TogglePageUsers({api, listUsers, dataLineChart, togglePageHome, widthCardMobile, widthCardDesktop, heightCard, heightHeaderCard, heightBodyCard}){    

    return(<Wrapper> <Title>USUARIOS</Title>
        <ScrollingX>     
            {listUsers.map(user => <Card title={user.name}
            icon={<RollbackOutlined />}
            onToggle={togglePageHome}
            lista={api.unidades}                                    
            componentList={[<ImgProfile src={user.imgProfile} />, <LineSeparator widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile}/>, <ListTextUsers widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile}><SpaceText>{user.email}</SpaceText>{user.foneNumber}</ListTextUsers>, <LineSeparator widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile}/>]}
            widthCardMobile={widthCardMobile}
            widthCardDesktop={widthCardDesktop}
            heightCard={heightCard}
            heightBodyCard={heightBodyCard}
            heightHeaderCard={heightHeaderCard}
        />)}                  
        </ScrollingX>  
        <ScrollingY>
            <WrapperLineChart><Charts options={dataLineChart} /></WrapperLineChart>
        </ScrollingY>                
    </Wrapper>)  
}
     
export default TogglePageUsers