import React from 'react'
import styled from "styled-components"
import { Window } from "./shared/Window"
import { WarframePalette } from './WarframePalette'

export const SelectedColor = ({paletteName, colorPosition}) => {
    return (
        <Window>
            <Content>
                <Header>SELECTED <br /> COLOR</Header>
                <PaletteName>{paletteName}</PaletteName>
                <StyledWarframePalette>
                    <WarframePalette size={29} paletteName={paletteName} colorPosition={colorPosition}/>
                </StyledWarframePalette>
            </Content>
        </Window>
    )
}

const StyledWarframePalette = styled.div`
    border-radius: 0.5rem;
    overflow: hidden;
    border: 3px solid ${props => props.theme.bordersColor};
    height:522px;
`

const Header = styled.h2`
    font-weight: 300;
    font-size: 2.1rem;
    text-align: center;
    background: rgb(233,165,165);
    background: linear-gradient(90deg, rgba(233,165,165,1) 0%, rgba(184,193,192,1) 25%, rgba(101,192,224,1) 50%, rgba(174,162,219,1) 75%, rgba(129,193,217,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const PaletteName = styled.div`
    text-align: center;
    font-weight: 500;
    padding: 0.4rem 0;
    margin-bottom: 0.5rem;
    width: 95%;
    border: 2px solid ${props => props.theme.bordersColor};
    border-radius: 0.3rem;
    text-transform: uppercase;    
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`