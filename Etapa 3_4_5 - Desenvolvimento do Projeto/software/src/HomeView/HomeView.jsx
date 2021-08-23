import React, { useState, useEffect } from 'react'
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
        axios.get(' https://886c-186-232-38-178.ngrok.io/api').then(response => setApi(response.data))        
    }, [listCards]);  

    return listCards 
}

export default HomeView