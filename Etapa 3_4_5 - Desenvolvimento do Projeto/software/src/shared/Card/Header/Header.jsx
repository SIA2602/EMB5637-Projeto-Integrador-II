import React from 'react'
import { Button, Wrapper } from './Header.styles'

function Header({title, icon, widthCardDesktop, widthCardMobile, heightHeaderCard}){
    return <Wrapper widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightHeaderCard={heightHeaderCard}>
        {title}
        <Button>{icon}</Button>
    </Wrapper>
}

export default Header