import React from 'react'
import { Wrapper, ListElements } from './Body.styles'

function Body({componentList, widthCardDesktop, widthCardMobile, heightBodyCard}){
    return <Wrapper widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightBodyCard={heightBodyCard}>
        {componentList.map(components => <ListElements>{components}</ListElements>)}        
    </Wrapper>
}

export default Body