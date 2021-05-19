"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

function drawTriangle(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 10, y + 20);
  ctx.lineTo(x - 10, y + 20);
  ctx.closePath();
  ctx.stroke();
}
// drawTriangle(200, 0); // 0  x   ,   y
// drawTriangle(190, 20); // 1  x - 10, y + 20
// drawTriangle(210, 20); // 2  x + 10, y + 20
// drawTriangle(180, 40);// 3  x - 20, y + 40
// drawTriangle(200, 40);// 4  x     , y + 40
// drawTriangle(220, 40);// 5  x + 20, y + 40

function draw(triangleHeight: number) {
  let x: number = canvas.width / 2;
  let y: number = 0;

  let ix: number = x;
  let iy: number = y;

  let jx: number = x - 10;
  let jy: number = y + 20;

  for (let i = 0; i < triangleHeight; i++) {
    drawTriangle(ix, iy);
    ix += 10;
    iy += 20;
    for (let j = 0; j < i; j++) {
      drawTriangle(jx, jy);
      jx += 10;
      jy += 20;

      if (jy === y + triangleHeight * 20) {
        jx -= triangleHeight * 10;
        jy -= 20;
      }
    }
  }
}

draw(4);
