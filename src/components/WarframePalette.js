import React, { useEffect, useRef } from 'react';
import { palettes } from '../palettes.js';
import { rgbToHex, invertColor } from '../App';

export const WarframePalette = ({ size, paletteName, colorPosition }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const palette = palettes.filter(palette => palette.name === paletteName)[0];

        for (const color of palette.palette) {
            if (colorPosition.x === color.position.x && colorPosition.y === color.position.y) {
                ctx.fillStyle = rgbToHex(color.color.r, color.color.g, color.color.b);
                ctx.fillRect(
                    size * color.position.x + 2,
                    size * color.position.y + 2,
                    size - 4,
                    size - 4
                );
                ctx.strokeStyle = invertColor(rgbToHex(color.color.r, color.color.g, color.color.b));
                ctx.lineWidth = "3";
                ctx.stroke();
            }
            else {
                ctx.fillStyle = rgbToHex(color.color.r, color.color.g, color.color.b);
                ctx.fillRect(size * color.position.x, size * color.position.y, size, size);
            }
        }
    });

    return (
        <div>
            <canvas ref={canvasRef} width={5 * size} height={18 * size} style={{ maxHeight: 18 * size }} />
        </div>
    );
};
