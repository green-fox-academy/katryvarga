'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let squareSize: number  
let fillColor: string[] = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet'] 

function drawRainbowSquares(squareSize: number, fillColor: string) {
    ctx.fillStyle = fillColor
    ctx.fillRect((canvas.width - squareSize) / 2, (canvas.height - squareSize) / 2, squareSize, squareSize);
}

for (let i = 0; i < fillColor.length; i++) {
    drawRainbowSquares(400 - (i*35), fillColor[i]);
}
