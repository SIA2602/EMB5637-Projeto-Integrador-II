import React, { useEffect, useState } from 'react'
import Card from '../shared/Card/Card'
import getPieChart from '../utils/getPieChart'
import LineChart from '../mocks/lineOptions.json'
import Api from '../mocks/api.json'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart } from './HomeView.styles'
import { TeamOutlined, RollbackOutlined } from '@ant-design/icons'

function HomeView(){

    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard   
    
    const [api, setApi] = useState(Api)
    const [dataLineChart, setdataLineChart] = useState(LineChart)        
    dataLineChart.series = api.unidades.map(unidade => unidade ? {name: unidade.name, data: [api.ativos.filter(ativo => ativo.unitId === unidade.id).length , api.usuarios.filter(usuario => usuario.unitId === unidade.id).length]} : {})
    const [listCards, setListCards] = useState(<Wrapper><Title>SETORES</Title>

            <ScrollingX>     
                {api.unidades.map(unidade => <Card title={unidade.name}
                    icon={<TeamOutlined/>}
                    onToggle={toggleUsers}
                    listaUsers={api.usuarios}
                    componentList={['Status dos Ativos', <Charts options={getPieChart(unidade, api)} />]}
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
        </Wrapper>      
    )   

    function toggleUsers(listUsers){
        const newCards = <Wrapper> <Title>USUARIOS</Title>

                <ScrollingX>     
                    {listUsers.map(user => <Card title={user.name}
                    icon={<RollbackOutlined />}
                    componentList={['Status dos Ativos']}
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
            </Wrapper>
             
        
        setListCards(newCards)        
    }

    return listCards
}

export default HomeView