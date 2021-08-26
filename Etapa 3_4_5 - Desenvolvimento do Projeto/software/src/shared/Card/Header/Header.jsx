import React from 'react'
import { Button, Wrapper } from './Header.styles'

function Header({title, icon, usuarios, setPageHomeToUsers, widthCardDesktop, widthCardMobile, heightHeaderCard}){
    return <Wrapper widthCardDesktop={widthCardDesktop} widthCardMobile={widthCardMobile} heightHeaderCard={heightHeaderCard}>
        {title}
        <Button onClick={() => setPageHomeToUsers(usuarios)}>{icon}</Button>
    </Wrapper>
}

export default Header