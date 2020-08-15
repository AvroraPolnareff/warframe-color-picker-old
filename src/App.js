import React, {createRef, useEffect, useRef, useState} from 'react';
import {palettes} from './palettes.js'
import {SketchPicker} from 'react-color'

const App = () => {
    const [colorResults, setColorResults] = useState([])
    const [color, setColor] = useState({hex: "#000000"})
    const [chosenColor, setChosenColor] = useState({})
    const [limit, setLimit] = useState(5)
    const ref = useRef()

    const onColorChange = (c) => {
        const {r, g, b} = c.rgb
        setColor(c)
        setColorResults(findClosestColors(r, g, b, palettes, limit))
    }

    return (
        <div className="App">
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div>
                    <canvas id='picker' ref={ref}/>

                    <SketchPicker onChangeComplete={onColorChange} color={color.hex} disableAlpha={true}/>
                    <label>limit</label>
                    <input name="limit" onChange={(e) => setLimit(e.target.value)} value={limit} type="number"/>
                    <ColorsList colors={colorResults} chosenColor={setChosenColor}/>
                </div>
                {chosenColor.name ? <WarframePalette size={30} pickedColor={chosenColor}/> : ''}
            </div>


        </div>
    );
}

const ColorsList = ({colors, chosenColor}) => {


    return (
        <ul>
            {colors.map((color, index) => {
                const hexColor = rgbToHex(color.color.r, color.color.g, color.color.b,)
                return (<li key={index} onClick={() => chosenColor(colors[index])}>
                        <span
                            style={{backgroundColor: hexColor, color: hexColor}}
                        >***</span>
                    name: {color.name}, position: x = {color.position.x + 1}, y = {color.position.y + 1},
                    distance: {Math.floor(color.distance * 100) / 100}
                </li>)
            })}
        </ul>
    )
}

const WarframePalette = ({size, pickedColor}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const palette = palettes.filter(palette => palette.name === pickedColor.name)[0]

        for (const color of palette.palette) {
            if (pickedColor.position.x === color.position.x && pickedColor.position.y === color.position.y) {
                ctx.fillStyle = rgbToHex(color.color.r, color.color.g, color.color.b)
                ctx.fillRect(
                    size * color.position.x + 2,
                    size * color.position.y + 2,
                    size - 4,
                    size - 4
                )
                ctx.strokeStyle = invertColor(rgbToHex(color.color.r, color.color.g, color.color.b))
                ctx.lineWidth = "3"
                ctx.stroke()
            } else {
                ctx.fillStyle = rgbToHex(color.color.r, color.color.g, color.color.b)
                ctx.fillRect(size * color.position.x, size * color.position.y, size, size)
            }
        }
    })

    return (
        <div>
            <div style={{borderStyle: "solid none solid none"}}>
                <h2
                    style={{wordWrap:"break-word", maxWidth: 5 * size, textAlign: "center"}}
                >
                    SELECTED COLOR
                </h2>

            </div>
            <canvas ref={canvasRef} width={5 * size} height={18 * size} style={{maxHeight: 18 * size}}/>
        </div>
    )
}


//helper functions

const findClosestColors = (r, g, b, palettes, limit) => {

    const distances = palettes.map(palette => {
        return palette.palette.map((color) => {
            const currentColor = color.color
            const currentPosition = color.position
            const distance = colorDistance(r, g, b, currentColor.r, currentColor.g, currentColor.b)
            return {distance, color: currentColor, position: currentPosition, name: palette.name}
        })
    })

    return distances.flat(1).sort((a, b) => a.distance - b.distance).slice(0, limit)
}

const colorDistance = (r1, g1, b1, r2, g2, b2) => {
    return Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2)
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}

export default App;
