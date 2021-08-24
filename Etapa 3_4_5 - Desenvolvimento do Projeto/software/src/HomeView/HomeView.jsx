/*import React, { useState, useEffect } from 'react'
import LineChart from '../mocks/lineOptions.json'
import Api from '../mocks/api.json'
import 'antd/dist/antd.css'
import axios from 'axios'
import TogglePageHome from '../HomeView/TogglePageHome'
import TogglePageUsers from '../HomeView/TogglePageUsers'
import TogglePageAtivos from '../HomeView/TogglePageAtivos'

function HomeView(){

    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard     
    
    const [api, setApi] = useState(Api)    
    console.log(api)      
    const [dataLineChart, setdataLineChart] = useState(LineChart)        
    dataLineChart.series = api.unidades.map(unidade => unidade ? {name: unidade.name, data: [api.ativos.filter(ativo => ativo.unitId === unidade.id).length , api.usuarios.filter(usuario => usuario.unitId === unidade.id).length]} : {})
    const [listCards, setListCards] =  useState(<TogglePageHome api={api} dataLineChart={dataLineChart} togglePageUsers={togglePageUsers} togglePageAtivos={togglePageAtivos} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightHeaderCard={heightHeaderCard} heightBodyCard={heightBodyCard}/>)    

    function togglePageUsers(unidadeId){            
        setListCards(<TogglePageUsers api={api} listUsers={api.usuarios.filter(usuario => usuario.unitId === unidadeId)} dataLineChart={dataLineChart} togglePageHome={togglePageHome} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightHeaderCard={heightHeaderCard} heightBodyCard={heightBodyCard}/>)              
    }

    function togglePageHome(){    
        console.log(api)             
        setListCards(<TogglePageHome api={api} dataLineChart={dataLineChart} togglePageUsers={togglePageUsers} togglePageAtivos={togglePageAtivos} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightHeaderCard={heightHeaderCard} heightBodyCard={heightBodyCard}/>)              
    }

    function togglePageAtivos(unidadeId){                 
        setListCards(<TogglePageAtivos api={api} listAtivos={api.ativos.filter(ativo => ativo.unitId === unidadeId)} dataLineChart={dataLineChart} togglePageHome={togglePageHome} widthCardMobile={widthCardMobile} widthCardDesktop={widthCardDesktop} heightCard={heightCard} heightHeaderCard={heightHeaderCard} heightBodyCard={heightBodyCard}/>)              
    }   

    useEffect(() => {         
        setInterval(() => axios.get('https://e931-186-232-38-178.ngrok.io/api').then(response => setApi(response.data)), 5000)        
    }, []);  

    return listCards 
}

export default HomeView*/

import React, { useState, useEffect } from 'react'
import LineChart from '../mocks/lineOptions.json'
import Api from '../mocks/api.json'
import 'antd/dist/antd.css'
import axios from 'axios'
import Card from '../shared/Card/Card'
import getPieChart from '../utils/getPieChart'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, SpaceText, Buttom } from './HomeView.styles'
import { TeamOutlined, PlusCircleOutlined } from '@ant-design/icons'

function HomeView(){

    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard     
    
    const [api, setApi] = useState({
        "ativos":[],
        "unidades":[],
        "usuarios":[],
        "empresa":[]
    })    
    console.log(api)      
    const [dataLineChart, setdataLineChart] = useState(LineChart)        
    const [listCards, setListCards] =  useState(
        <Wrapper><Title>SETORES</Title>
        <ScrollingX>     
            {api.unidades.map(unidade => <Card title={unidade.name}
                icon={<TeamOutlined/>}                                                    
                componentList={[ <SpaceText>Status dos Ativos</SpaceText>, <Charts options={getPieChart(unidade, api)} />]}
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

    useEffect(() => {         
        setInterval(() => axios.get('https://0006-186-232-38-178.ngrok.io/api').then(response => setApi(response.data)), 3000)                     
    }, []);  

    useEffect(() => {                           
        setListCards(<Wrapper><Title>SETORES</Title>
            <ScrollingX>     
                {api.unidades.map(unidade => <Card title={unidade.name}
                    icon={<TeamOutlined/>}                                                    
                    componentList={[ <SpaceText>Status dos Ativos</SpaceText>, <Charts options={getPieChart(unidade, api)} />]}
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
    }, [dataLineChart])

    useEffect(() => {
        setdataLineChart({...LineChart, series: api.unidades.map(unidade => unidade ? {name: unidade.name, data: [api.ativos.filter(ativo => ativo.unitId === unidade.id).length , api.usuarios.filter(usuario => usuario.unitId === unidade.id).length]} : {})})          
        //console.log(dataLineChart)
    }, [api])

    return listCards 
}

export default HomeView