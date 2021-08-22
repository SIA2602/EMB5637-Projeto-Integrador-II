import React from 'react'
import Card from '../shared/Card/Card'
import getPieChart from '../utils/getPieChart'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, SpaceText, Buttom } from './HomeView.styles'
import { TeamOutlined, PlusCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

function TogglePageHome({api, dataLineChart, togglePageUsers, togglePageAtivos, widthCardMobile, widthCardDesktop, heightCard, heightHeaderCard, heightBodyCard}){    

    return(<Wrapper><Title>SETORES</Title>
        <ScrollingX>     
            {api.unidades.map(unidade => <Card title={unidade.name}
                icon={<TeamOutlined/>}
                onToggle={togglePageUsers}                    
                lista={api.usuarios.filter(usuario => usuario.unitId === unidade.id)}                                    
                componentList={[ <SpaceText>Status dos Ativos <Buttom onClick={() => togglePageAtivos(api.ativos.filter(ativo => ativo.unitId === unidade.id))}><PlusCircleOutlined /></Buttom></SpaceText>, <Charts options={getPieChart(unidade, api)} />]}
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
     
export default TogglePageHome