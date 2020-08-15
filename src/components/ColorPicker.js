import React from 'react'
import styled from "styled-components"
import { Window } from "./shared/Window"
import { Badge } from "./shared/Badge"
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
            </FlexColumnCentred>
        </Window>
    )
}

const PickerImg = styled.img`
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