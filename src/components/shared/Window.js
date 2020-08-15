import React from 'react'
import styled from "styled-components"

export const Window = ({ children }) => {
    return (
        <div>
            <WindowBorder>
                <Content>
                    {children}
                </Content>
            </WindowBorder>
        </div>
    )
}

const Content = styled.div`
    font-family: "Gilroy";
    padding: 0.5rem 0.35rem;
    border-radius: 1em;
    background-color: ${props => props.theme.windowsBackgroundColor};
    color: ${props => props.theme.primaryTextColor};
`

const WindowBorder = styled.div`
    padding: 4px 16px 16px 4px;
    background-color: ${props => props.theme.bordersColor};
    border-radius: 1em;
    width: fit-content;
`