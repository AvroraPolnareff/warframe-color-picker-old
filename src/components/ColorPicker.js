import React from 'react'
import styled from "styled-components"
import { Window } from "./shared/Window"
import { Badge } from "./shared/Badge"
import { Divider } from "./shared/Divider"
import picker from "./assets/picker.png"


export const ColorPicker = () => {
    return (
        <Window style={{ margin: "0 100px 0 0" }} >
            <FlexColumnCentred>
                <FlexRow>
                    <HeaderWrapper>
                        <div  >
                            <HeaderColor>COLOR</HeaderColor>
                            <HeaderPicker>PICKER</HeaderPicker>
                        </div>
                    </HeaderWrapper>
                    <Badge>#000000</Badge>
                </FlexRow>
                <PickerImg src={picker} />
                <Divider/>
                <PickerRGB/>
                <PickerHSL/>
            </FlexColumnCentred>
            
        </Window>
    )
}

const PickerRGB = () => {
    return (
        <StyledPicker>
            <ColorSchemeName>RGB</ColorSchemeName>
            <Badge color="#dba3a3">255</Badge>
            <Badge color="#a3dba3">255</Badge>
            <Badge color="#a3a3db">255</Badge>
        </StyledPicker>
    )
}

const PickerHSL = () => {
    return (
        <StyledPicker style={{marginRight: "2.35rem"}}>
            <ColorSchemeName>HSL</ColorSchemeName>
            <Badge >255</Badge>
            <Badge >255</Badge>
            <Badge >255</Badge>
        </StyledPicker>
    )
}

const ColorSchemeName = styled.div`
    padding-right: 0.3em
` 

const StyledPicker = styled.div`
    margin-top: 0.3em;
    margin-right: 3em;
    display: flex;
    align-items: center;
    font-size: 14px
`

const PickerImg = styled.img`
    margin-bottom: 0.5em;
`


const FlexColumnCentred = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FlexRow = styled.div`
    display: flex;
    max-height: 2.3rem;
`

const HeaderWrapper = styled.div`
    position: relative;
    top: -2em;
    left: -2em;
    transform: rotate(-15deg);

`

const HeaderColor = styled.h2`
    display: block;
    text-shadow: -1px 0 #d2a3db, 0 1px #d2a3db, 1px 0 #d2a3db, 0 -1px #d2a3db;
    color: white;
    font-weight: 300;
    font-size: 1.6rem;
    font-style: italic;
    margin-bottom: 0;

`
const HeaderPicker = styled.h2`
    display: block;
    text-shadow: -1px 0 #d2a3db, 0 1px #d2a3db, 1px 0 #d2a3db, 0 -1px #d2a3db;
    color: white;
    font-weight: 300;
    font-size: 1.6rem;
    font-style: italic;
    
    padding-left: 1.7em;

`