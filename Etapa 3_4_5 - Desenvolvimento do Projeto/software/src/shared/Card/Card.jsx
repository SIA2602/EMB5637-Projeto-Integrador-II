import React from 'react'
import Body from './Body/Body'
import { Wrapper } from './Card.styles'
import Header from './Header/Header'

function Card({heightCard, usuarios, widthCardDesktop, setPageHomeToUsers, widthCardMobile, title, icon, heightHeaderCard, heightBodyCard, componentList}){
    return(
        <Wrapper heightCard={heightCard} widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile}>
            <Header title={title} icon={icon} usuarios={usuarios} setPageHomeToUsers={setPageHomeToUsers}  widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightHeaderCard={heightHeaderCard}/>
            <Body componentList={componentList} widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightBodyCard={heightBodyCard}/>     
        </Wrapper>
    )
}

export default Card