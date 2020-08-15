
import styled from "styled-components"

export const ColorCell = styled.div`
    content: " ";
    display: inline-block;
    background-color: ${props => props.color || "#000000"};
    height: 0.9rem;
    margin: 0 0.2rem;
    
    width: 1.1rem;
    border-radius: 0.55rem;
    /*box-shadow: 
        0 1px 2px #fff, /*bottom external highlight*/

    /*    inset 0.06rem 0.06rem 1px rgba(255,255,255,0.8); /*top internal highlight*/
    
`