import React from 'react'
import Body from './Body/Body'
import { Wrapper } from './Card.styles'
import Header from './Header/Header'


class Card extends React.Component{

    constructor(props){
        super(props)       
        this.card = <Wrapper heightCard={props.heightCard} widthCardDesktop={props.widthCardDesktop} widthCardMobile={props.widthCardMobile}>
            <Header title={props.title} icon={props.icon} widthCardDesktop={props.widthCardDesktop} widthCardMobile={props.widthCardMobile} heightHeaderCard={props.heightHeaderCard}/>
            <Body componentList={props.componentList} widthCardDesktop={props.widthCardDesktop} widthCardMobile={props.widthCardMobile} heightBodyCard={props.heightBodyCard}/>     
        </Wrapper>
    }

    render(){        
        return this.card                           
    }
}

export default Card