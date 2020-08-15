import React from "react"
import styled from "styled-components"
import suggestions from "./suggestions.svg"

export const SuggestionsHeader = () => (
    <StyledSuggestionsHeader src={suggestions}></StyledSuggestionsHeader>
)

const StyledSuggestionsHeader = styled.img`
    fill: rgb(235,210,160);
    fill: linear-gradient(90deg, rgba(235,210,160,1) 0%, rgba(160,162,235,1) 100%);
`
