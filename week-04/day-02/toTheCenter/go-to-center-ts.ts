'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function randomColor() {
    const colors = [
      'black',
      'green',
      'red',
      'blue',
      'purple',
      'gold',
      'orange',
      'yellow',
      'cyan',
      'maroon',
      'pink',
      'aqua',
    ];
    const randomNumberBetween0And1 = Math.random();
    const randomNumberBetween0AndColorsLength =
      (colors.length - 1) * randomNumberBetween0And1;
    const randomColorIndex = Math.round(randomNumberBetween0AndColorsLength);
    return colors[randomColorIndex];
  }
  


function drawASingleLine(x: number, y: number) {
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

for (let i = 0; i < 21; i++) {
    let y = i * 20
    drawASingleLine(0, y,);
}