'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.


ctx.beginPath();
ctx.strokeStyle = `red`;
ctx.moveTo(250, 200);
ctx.lineTo(350, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = `green`;
ctx.moveTo(300,250);
ctx.lineTo(300,150);
ctx.stroke();