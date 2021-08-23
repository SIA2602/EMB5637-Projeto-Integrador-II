import React from 'react'
import Card from '../shared/Card/Card'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, SpaceText, ImgMachine, Buttom } from './HomeView.styles'
import { RollbackOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Alert } from 'antd'
import 'antd/dist/antd.css'
import getStringStatus from '../utils/getStringStatus'

function TogglePageAtivos({api, listAtivos, dataLineChart, togglePageHome, widthCardMobile, widthCardDesktop, heightCard, heightHeaderCard, heightBodyCard}){    

    return(<Wrapper> <Title>ATIVOS</Title>
        <ScrollingX>     
            {listAtivos.map(ativo => <Card title={ativo.name}
            icon={<RollbackOutlined />}
            onToggle={togglePageHome}
            lista={[]}                                    
            componentList={[<ImgMachine widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} src={ativo.image} />, <Alert message={<SpaceText>{ativo.status} <Buttom ><PlusCircleOutlined /></Buttom></SpaceText>} type={getStringStatus(ativo.status)} showIcon />]}
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
     
export default TogglePageAtivos