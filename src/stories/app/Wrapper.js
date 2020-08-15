import React from 'react'
import { ThemeProvider } from 'styled-components'
import {defaultTheme} from "../../themes"
import { StyledApp } from "../../App"

export const Wrapper = ({children}) => (
    <ThemeProvider theme={defaultTheme}>
        <StyledApp>
            {children}
        </StyledApp>
    </ThemeProvider>
)