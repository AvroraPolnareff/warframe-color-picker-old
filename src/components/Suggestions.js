import React from 'react'
import styled, { withTheme } from "styled-components"
import { SuggestionsHeader } from "./assets/SuggestionsHeader"
import { Window } from "./shared/Window"
import { Divider } from "./shared/Divider"
import { ColorCell } from "./shared/ColorCell"


export const Suggestions = () => {
    return (

        <Window>
            <Content>
                <SuggestionsHeader />
                <ItalicText>SCROLL FOR MORE!</ItalicText>
            </Content>
            <Divider />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
            <Suggestion color="black" name="classic" value="99%" />
        </Window>
    )
}

const Suggestion = ({ color, name, value }) => {
    return (
        <StyledSuggestion>
            <FlexCentred>
                <ColorBadge>
                    <ColorCell color={color} />
                </ColorBadge>
                <Badge>
                    {name}
                </Badge>
            </FlexCentred>

            <Badge>
                {value}
            </Badge>

        </StyledSuggestion>
    )
}

const StyledSuggestion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding-bottom: 0.3rem;
`

const Badge = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.badges};
    color: ${props => props.theme.badgesText};
    padding: 0.1rem 0.3rem;
    margin: 0 0.2rem;
    border-radius: 0.4rem;
    font-weight: 600;

`
const ColorBadge = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.badges};
    color: ${props => props.theme.badgesText};
    padding: 0.1rem;
    margin: 0 0.2rem;
    border-radius: 0.4rem;


`

const FlexCentred = styled.div`
    display:flex;
    align-items: center;
`

const ItalicText = styled.div`
    font-style: "italic";
    font-weight: "medium"
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`