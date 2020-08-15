import React from 'react';
import styled from "styled-components"

/**
 * Primary UI component for user interaction
 */


export const Button = styled.button`
  font-family: 'Gilroy', sans-serif;
  background-color: ${props => props.backgroundColor || "#a5e8e8"};
  color: white;
  font-weight: 600;
  border: 0;
  border-radius: 1em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  
  padding: 4px 14px;
  text-transform: uppercase;
  transition: border-radius 0.50s linear;
  border-radius: ${props => props.selected ? "3em" : "0.25em"};
`

