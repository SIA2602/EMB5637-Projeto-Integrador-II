import React from 'react'
import { Button, Wrapper } from './Header.styles'

function Header({title, icon}){
    return <Wrapper>
        {title}
        <Button>{icon}</Button>
    </Wrapper>
}

export default Header