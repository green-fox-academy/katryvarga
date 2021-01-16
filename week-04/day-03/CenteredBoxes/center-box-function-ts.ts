"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize: number;
function randomColor() {
  const colors = [
    "black",
    "green",
    "red",
    "blue",
    "purple",
    "gold",
    "orange",
    "yellow",
    "cyan",
    "maroon",
    "pink",
    "aqua",
  ];
  const randomNumberBetween0And1 = Math.random();
  const randomNumberBetween0AndColorsLength =
    (colors.length - 1) * randomNumberBetween0And1;
  const randomColorIndex = Math.round(randomNumberBetween0AndColorsLength);
  return colors[randomColorIndex];
}

function drawAsquare(squareSize: number) {
  ctx.strokeStyle = randomColor();
  ctx.strokeRect(
    (canvas.width - squareSize) / 2,
    (canvas.height - squareSize) / 2,
    squareSize,
    squareSize
  );
}

drawAsquare(200);

drawAsquare(50);

drawAsquare(350);
