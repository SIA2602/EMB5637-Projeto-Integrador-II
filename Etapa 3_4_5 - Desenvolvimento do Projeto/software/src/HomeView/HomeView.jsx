import React from 'react'
import { LayoutArea, ScrollingX, Wrapper, CardTest, ScrollingY, LineBarTest } from './HomeView.styles'


function HomeView(){
    return <Wrapper>
        <LayoutArea>
            <h2>Ola, Danilo</h2>

            <ScrollingX>
                <CardTest />   
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />
                <CardTest />                
            </ScrollingX>   

            <ScrollingY>
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
                <LineBarTest />
            </ScrollingY>                   
        </LayoutArea> 
               
    </Wrapper>
}

export default HomeView