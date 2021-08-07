import React from 'react'
import { Wrapper } from './Card.styles'
import Header from './Header/Header'


class Card extends React.Component{

    constructor(props){
        super(props)       
        this.card = <Wrapper>
            <Header title={props.title} icon={props.icon}/>
        </Wrapper>
    }

    render(){        
        return(
            this.card         
        )                   
    }
}

export default Card