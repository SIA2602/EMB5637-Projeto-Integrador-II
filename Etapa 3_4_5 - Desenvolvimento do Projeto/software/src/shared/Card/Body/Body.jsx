import React from 'react'
import { Wrapper } from './Body.styles'

function Body({widthCardDesktop, widthCardMobile, heightBodyCard}){
    return <Wrapper widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightBodyCard={heightBodyCard}>
        Ola
    </Wrapper>
}

export default Body