import React, {useState} from 'react'
import styled from "styled-components"
import {Window} from "./shared/Window"
import {Badge} from "./shared/Badge"
import {Divider} from "./shared/Divider"
import picker from "./assets/picker.png"
import Color from "color"

export const ColorPicker = () => {
    const [color, setColor] = useState(Color({r: 150, g: 30, b: 10}))

    return (
        <Window style={{margin: "0 100px 0 0"}}>
            <FlexColumnCentred>
                <FlexRow>
                    <HeaderWrapper>
                        <div>
                            <HeaderColor>COLOR</HeaderColor>
                            <HeaderPicker>PICKER</HeaderPicker>
                        </div>
                    </HeaderWrapper>
                    <HexInput
                        maxlength="7" type={"text"}
                        spellcheck={"false"} value={color.hex().toString()}
                        onChange={(e) => setColor(Color().hex(e.target.value))}
                    />
                </FlexRow>
                <PickerImg src={picker}/>
                <Divider/>
            </FlexColumnCentred>
            <NumbersPicker color={color} onColorChange={setColor}/>
        </Window>
    )
}

const HexInput = styled.input`
    display: flex;
    align-items: center;
    background-color: ${props => props.color || props.theme.badges};
    color: ${props => props.theme.badgesText};
    padding: 0.1rem 0.3rem;
    max-height: 1.2rem;
    margin: 0 0.2rem;
    border-radius: 0.4rem;
    font-weight: 600;
    font-size: 14px;
    width: 3.7rem;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const NumbersPicker = ({color, onColorChange}) => {

    const onChange = (e) => {
        switch (e.target.name) {
            case "red":
                onColorChange(color.red(e.target.value))
                break
            case "green":
                onColorChange(color.green(e.target.value))
                break
            case "blue":
                onColorChange(color.blue(e.target.value))
                break
            case "hue":
                onColorChange(color.hue(e.target.value))
                break
            case "saturation":
                onColorChange(color.saturate(e.target.value))
                break
            case "lightness":
                onColorChange(color.lightness(e.target.value))
                break
            default:
                return
        }
    }

    return (
        <StyledPicker>
            <Grid2X4>
                <ColorSchemeName>RGB</ColorSchemeName>
                <ColorInput name={"red"} onChange={onChange} color="#dba3a3" value={color.red()}/>
                <ColorInput name={"green"} onChange={onChange} color="#a3dba3" value={color.green()}/>
                <ColorInput name={"blue"} onChange={onChange} color="#a3a3db" value={color.blue()}/>
                <ColorSchemeName>HSL</ColorSchemeName>
                <ColorInput name={"hue"} onChange={onChange} value={Math.round(color.hsl().color[0])}/>
                <ColorInput name={"saturation"} onChange={onChange} value={Math.round(color.hsl().color[1])}/>
                <ColorInput name={"lightness"} onChange={onChange} value={Math.round(color.hsl().color[2])}/>
            </Grid2X4>
        </StyledPicker>
    )
}

const ColorInput = styled.input`
    display: flex;
    align-items: center;
    background-color: ${props => props.color || props.theme.badges};
    color: ${props => props.theme.badgesText};
    padding: 0.1rem 0.3rem;
    max-height: 1.2rem;
    margin: 0 0.2rem;
    border-radius: 0.4rem;
    font-weight: 600;
    font-size: 14px;
    width: 1.5rem;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const Grid2X4 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 0.3rem;
    justify-items: start;
    justify-content: start;
    margin-right: 2.6rem;
    margin-left: 1rem;
    
`

const PickerHSL = () => {
    return (
        <StyledPicker style={{marginRight: "2.35rem"}}>

        </StyledPicker>
    )
}

const ColorSchemeName = styled.div`
    padding-right: 0.3em
`

const StyledPicker = styled.div`
    margin-top: 0.3em;
    //margin-right: 3em;
    //display: flex;
    //align-items: center;
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