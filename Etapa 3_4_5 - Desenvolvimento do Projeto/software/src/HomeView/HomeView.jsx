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
//import Api from '../mocks/api.json'
import 'antd/dist/antd.css'
import axios from 'axios'
import Card from '../shared/Card/Card'
import getPieChart from '../utils/getPieChart'
import Charts from '../shared/Charts/Charts'
import { ScrollingX, Wrapper, ScrollingY, Title, WrapperLineChart, SpaceText, ImgProfile, LineSeparator, ListTextUsers } from './HomeView.styles'
import { TeamOutlined, RollbackOutlined } from '@ant-design/icons'

function HomeView(){

    //Variaveis responsaveis por deixar o layout responsivo
    const widthCardMobile = 65
    const widthCardDesktop = 20
    const heightCard = 50    
    const heightHeaderCard = 5
    const heightBodyCard = heightCard-heightHeaderCard     

    //URL da api
    const urlAPI = 'https://0414-186-232-38-178.ngrok.io/api'
    
    const [api, setApi] = useState({
        "ativos":[],
        "unidades":[],
        "usuarios":[],
        "empresa":[]
    }) //Estado inicial da minha Api, setando como vazia    
         
    const [dataLineChart, setdataLineChart] = useState(LineChart) //Variavel que armazena os dados do graficos Line Chart        
    const [listCards, setListCards] =  useState(
        <Wrapper><Title>SETORES</Title>
        <ScrollingX>     
            {api.unidades.map(unidade => <Card title={unidade.name}
                icon={<TeamOutlined/>}                                                    
                componentList={[ <SpaceText>Status dos Ativos</SpaceText>, <Charts options={getPieChart(unidade, api)} />]}
                setPageHomeToUsers={setPageHomeToUsers}
                usuarios={[]}
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
    )//Variavel que armaza a pagina atual a ser visualizada        
    const [pageAplication, setPageAplication] = useState(0) //variavel responsavel por indicar em qual pagina esta, sendo: 0=Page Home 1=Page Usuarios e 2=Page Ativos
    const [indexUnit, setIndexUnit] = useState(null) //Variavel responsavel por armazenar a unidade que quero verificar os dados para os usuarios ou ativos
    
    //A cada intervalo de tempo eh verificado se a api foi atualizada
    useEffect(() => {         
        setInterval(() => axios.get(urlAPI).then(response => {if(response.data !== api) setApi(response.data)}), 3000)                     
    }, []); 

    //Caso o botao seja clicado eh solicitado um dado atualizado da api
    useEffect(() => {         
        axios.get(urlAPI).then(response => setApi(response.data))                     
    }, [pageAplication]);     
    
    //caso a a pi foi atualizada eh atualizado o Line chart
    useEffect(() => {
        setdataLineChart({...LineChart, series: api.unidades.map(unidade => unidade ? {name: unidade.name, data: [api.ativos.filter(ativo => ativo.unitId === unidade.id).length , api.usuarios.filter(usuario => usuario.unitId === unidade.id).length]} : {})})          
    }, [api])

    //Caso houver cliques de botao eh atualizado a pagina
    useEffect(() => {  
        //Se estiver em zero sera mostrado a pagina home 
        if(pageAplication === 0){
            setListCards(<Wrapper><Title>SETORES</Title>
                <ScrollingX>     
                    {api.unidades.map(unidade => <Card title={unidade.name}
                        icon={<TeamOutlined/>}                                                    
                        componentList={[ <SpaceText>Status dos Ativos</SpaceText>, <Charts options={getPieChart(unidade, api)} />]}
                        setPageHomeToUsers={setPageHomeToUsers}
                        usuarios={api.usuarios.filter(usuario => usuario.unitId === unidade.id)}
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
        
        //Caso em 1 sera mostrado a pagina referente aos dados dos usuarios daquela unidade
        else if(pageAplication === 1 && indexUnit !== null){
            setListCards(<Wrapper> <Title>USUARIOS</Title>
                <ScrollingX>     
                    {indexUnit.map(user => <Card title={user.name}
                    icon={<RollbackOutlined />}
                    setPageHomeToUsers={setPageHomeToUsers}        
                    unidade={null}                                          
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
    }, [dataLineChart])   
    
    //Funcao responsavel por modificar o estado da pagina home para pagina de usuarios ou vise versa
    function setPageHomeToUsers(usuarios){        
        if(pageAplication === 0){
            setIndexUnit(usuarios)
            setPageAplication(1)            
        } 
        else{
            setPageAplication(0)
            setIndexUnit(null)
        }           
    }

    return listCards 
}

export default HomeView