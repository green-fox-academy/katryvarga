'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize: number = 50;

function drawSquare(x: number, y: number) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(x, y, squareSize, squareSize);
}

//// drawSquare(50, 50);

for (let i = 0; i < 3; i++) {
   drawSquare(i * 50,i * 50,);
}

// drawSquare(50, 50);

// for (let i = 0; i < 3; i++) {
//     drawSquare(i * (squareSize), 0);
// }

// for (let i = 0; i <= canvas.width / (squareSize * 2); i++) {
//     for(let j = 0; j <= canvas.height / (squareSize * 2); j++) {
//         drawSquare(i * (squareSize * 2), j * (squareSize * 2));
//         drawSquare((i * (squareSize * 2)) + squareSize, (j * (squareSize * 2)) + squareSize);
//     }
// }
