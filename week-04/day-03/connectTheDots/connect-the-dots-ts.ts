'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: 
// Connect these: 

let connectingDotsBox: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let connectindDots1: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(list) {
    ctx.strokeStyle = 'green'
    ctx.beginPath();
    ctx.moveTo(list[0][0], list[0][1]);
    for (let i = 0; i < list.length; i++) {
        ctx.lineTo(list[i][0], list[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
}

function connectAndFillDots(list) {
    ctx.fillStyle = 'green'
    ctx.beginPath();
    ctx.moveTo(list[0][0], list[0][1]);
    for (let i = 0; i < list.length; i++) {
        ctx.lineTo(list[i][0], list[i][1]);
    }
    ctx.closePath();
    ctx.fill();
}

connectDots(connectingDotsBox);
connectAndFillDots(connectindDots1);
