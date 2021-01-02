'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let squareSize: number = 10;

function drawSquare(x: number, y: number) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(x, y, squareSize, squareSize);
}

for (let i = 0; i <= canvas.width / (squareSize * 2); i++) {
    for(let j = 0; j <= canvas.height / (squareSize * 2); j++) {
        drawSquare(i * (squareSize * 2), j * (squareSize * 2));
        drawSquare((i * (squareSize * 2)) + squareSize, (j * (squareSize * 2)) + squareSize);
    }
}
