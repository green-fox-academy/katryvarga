"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let squareSize: number = 10;

function drawPurpleSquare(x: number, y: number) {
  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.fillRect(x, y, squareSize, squareSize);
}

// drawPurpleSquare(10,10);

for (let i: number = 0; i < 20; i++) {
  drawPurpleSquare(i * 10, i * 10);
}
