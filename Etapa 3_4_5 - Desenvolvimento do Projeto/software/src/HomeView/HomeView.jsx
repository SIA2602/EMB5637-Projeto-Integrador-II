import React, { useEffect, useState } from 'react'
import Card from '../shared/Card/Card'
import PieChart from '../mocks/pieOptions.json'
import LineChart from '../mocks/lineOptions.json'
import Api from '../mocks/api.json'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart } from './HomeView.styles'
import { TeamOutlined } from '@ant-design/icons'

function HomeView(){

    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard
    
    const chartPie = <div><Charts options={PieChart} /></div>    
    
    const [api, setApi] = useState(Api)
    const [dataLineChart, setdataLineChart] = useState(LineChart)
    dataLineChart.series = api.unidades.map(unidade => unidade ? {name: unidade.name, data: [api.ativos.filter(ativo => ativo.unitId == unidade.id).length , api.usuarios.filter(usuario => usuario.unitId == unidade.id).length]} : {})

    const chartLine = <WrapperLineChart><Charts options={dataLineChart} /></WrapperLineChart>
    
    return <Wrapper>        
        <Title>SETORES</Title>

        <ScrollingX>     
            {api.unidades.map(unidade => <Card title={unidade.name}
                icon={<TeamOutlined/>}
                componentList={['Status dos Ativos', chartPie]}
                widthCardMobile={widthCardMobile}
                widthCardDesktop={widthCardDesktop}
                heightCard={heightCard}
                heightBodyCard={heightBodyCard}
                heightHeaderCard={heightHeaderCard}
            />)}          
        </ScrollingX>   

        <ScrollingY>
            {chartLine}
        </ScrollingY>                
    </Wrapper>
}

export default HomeView