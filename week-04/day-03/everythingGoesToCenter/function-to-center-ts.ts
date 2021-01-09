'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawASingleLine(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

// drawASingleLine( 0,0)

for (let y = 0; y <= canvas.height / 20; y++) {
  drawASingleLine(600, y * 20);
  drawASingleLine(0, y * 20);
}

for (let x = 0; x <= canvas.width / 20; x++) {
  drawASingleLine(x * 20, 0);
  drawASingleLine(x * 20, 400);
}
