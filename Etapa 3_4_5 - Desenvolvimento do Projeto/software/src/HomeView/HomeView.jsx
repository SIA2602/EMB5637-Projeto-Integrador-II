import React, { useState, useEffect } from 'react'
import Card from '../shared/Card/Card'
import getPieChart from '../utils/getPieChart'
import getStringStatus from '../utils/getStringStatus'
import LineChart from '../mocks/lineOptions.json'
import Api from '../mocks/api.json'
import getApi from '../utils/getApi'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, ImgProfile, ImgMachine, ListTextUsers, SpaceText, LineSeparator, Buttom } from './HomeView.styles'
import { TeamOutlined, RollbackOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Alert } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'

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
    const [listCards, setListCards] =  useState(<Wrapper><Title>SETORES</Title>
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
        </Wrapper>      
    )    

    useEffect(() => {         
        axios.get('https://9c7e-186-232-36-168.ngrok.io/api').then(response => setApi(response.data))        
    }, [listCards]);  

    function togglePageUsers(listUsers){
        const newCards = <Wrapper> <Title>USUARIOS</Title>
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
        </Wrapper>          
        setListCards(newCards)              
    }

    function togglePageHome(unidades){
        const newCards = <Wrapper><Title>SETORES</Title>
            <ScrollingX>     
                {unidades.map(unidade => <Card title={unidade.name}
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
        </Wrapper>          
        setListCards(newCards)              
    }

    function togglePageAtivos(listAtivos){
        const newCards = <Wrapper> <Title>ATIVOS</Title>
            <ScrollingX>     
                {listAtivos.map(ativo => <Card title={ativo.name}
                icon={<RollbackOutlined />}
                onToggle={togglePageHome}
                lista={api.unidades}                                    
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
        </Wrapper>          
        setListCards(newCards)              
    }   

    return listCards
}

export default HomeView