'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

function drawASingleLine(startX: number, startY: number, endX: number, endY: number, color: string) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

// drawASingleLine(200, 0, 400, 200, 'green')

function linePlay(numberOfLines: number) {
    for (let i = 0; i < numberOfLines; i++) {
        drawASingleLine(i * canvas.width / numberOfLines, 0, canvas.width, i * canvas.height / numberOfLines + canvas.height / numberOfLines, 'purple');
    }

    for (let i = 0; i < numberOfLines; i++) {
        drawASingleLine(0, i * canvas.height / numberOfLines, i * canvas.width / numberOfLines + canvas.width / numberOfLines, canvas.height, 'green');
    }
}

linePlay(20);
