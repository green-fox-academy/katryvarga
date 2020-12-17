'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(50, 150);
ctx.stroke();


ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();