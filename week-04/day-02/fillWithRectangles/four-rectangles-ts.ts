"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 100);
ctx.lineTo(50, 50);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(180, 120);
ctx.lineTo(180, 140);
ctx.lineTo(240, 140);
ctx.lineTo(240, 120);
ctx.lineTo(180, 120);
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(480, 200);
ctx.lineTo(480, 250);
ctx.lineTo(560, 250);
ctx.lineTo(560, 200);
ctx.lineTo(480, 200);
ctx.stroke();

ctx.strokeStyle = "pink";
ctx.beginPath();
ctx.moveTo(500, 10);
ctx.lineTo(500, 40);
ctx.lineTo(580, 40);
ctx.lineTo(580, 10);
ctx.lineTo(500, 10);
ctx.stroke();

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(10, 300);
ctx.lineTo(40, 300);
ctx.lineTo(40, 380);
ctx.lineTo(10, 380);
ctx.lineTo(10, 300);
ctx.stroke();
