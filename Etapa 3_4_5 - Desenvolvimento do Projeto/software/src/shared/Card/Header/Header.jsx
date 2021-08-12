import React from 'react'
import { Button, Wrapper } from './Header.styles'

function Header({title, icon, onToggle, listaUsers, widthCardDesktop, widthCardMobile, heightHeaderCard}){
    return <Wrapper widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightHeaderCard={heightHeaderCard}>
        {title}
        <Button onClick={() => onToggle(listaUsers)}>{icon}</Button>
    </Wrapper>
}

export default Header