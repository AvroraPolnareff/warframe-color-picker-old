import React from 'react'
import styled, {withTheme} from "styled-components"
import {Window} from "./shared/Window"
import {Button} from "./shared/Button"
import {ColorCell} from "./shared/ColorCell"

const TargetScheme = ({theme}) => {
    return (
        <Window>
            <Header>TARGET SCHEME</Header>
            <Content style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <Button selected backgroundColor={theme.defaultButtonColor}>default</Button>
                    <Button backgroundColor={theme.manualButtonColor}>manual</Button>
                </div>
                <Divider/>
                
            </Content>
            <Default/>
        </Window>
    )
}

const Divider = styled.div`
    margin: 0.2rem 0;
    background-color: #ebebeb;
    width: 95%;
    height: 2px;
    border-radius: 2px;
`



const Default = () => {
    return (
        <div >
            <ColorEntry text="PRIMARY" color="f8f5ed"/>
            <ColorEntry text="SECONDARY" color="#525757"/>
            <ColorEntry text="TERTIARY" color="#a64731"/>
            <ColorEntry text="QUATERNARY" color="#c0cbcf"/>
            <Divider/>
            <ColorEntryTwoColors text="EMISSIVE 1, 2" color1="#dffefb" color2="#53bcb1"/>
            <ColorEntryTwoColors text="ENERGY 1, 2" color1="#dffefb" color2="#53bcb1"/>
        </div>
    )
}

const ColorEntry = ({text, color}) => {
    return (
        <StyledColorEntry>
            <ColorCell color={color}/>
            <ColorName>{text}</ColorName>
        </StyledColorEntry>
    )
}

const ColorEntryTwoColors = ({text, color1, color2}) => {
    return (
        <StyledColorEntry>
            <ColorCell color={color1}/>
            <ColorCell color={color2}/>
            <ColorName>{text}</ColorName>
        </StyledColorEntry>
    )
}

const ColorName = styled.span`
    
    &:before {
        margin-right: 0.3rem;
        content: "•";
    }
`

const StyledColorEntry = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h2`
    font-weight: 900;
    color: ${props => props.theme.targetSchemeHeader};
    font-size: 1.4rem
`

export default withTheme(TargetScheme)