'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

function randomColor() {
    let grey: string[] = ['#404040','#484848', '#505050', '#686868', '#707070', '#888888', '#A8A8A8', '#B8B8B8'];  
    let colorpicker: number = Math.round(Math.random() * (grey.length - 1));
    return grey[colorpicker];
}

// function createCircleStars(x, y) {
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.fillStyle = randomColor();
//     ctx.arc(x, y, 5, 0, Math.PI * 2);
//     ctx.fill();
// }

// createCircleStars(20, 50)

// function createSquareStars(x, y) {
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.fillStyle = randomColor();
//     ctx.lineTo(x + 10, y);
//     ctx.lineTo(x + 10, y +10);
//     ctx.lineTo(x, y + 10);
//     ctx.closePath();
//     ctx.fill();
// }

// createSquareStars( 20, 50)

function createStar(x, y) {
    ctx.beginPath();
    ctx.fillStyle = randomColor();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 25, y);
    ctx.lineTo(x + 5, y + 20);
    ctx.lineTo(x + 12, y - 12);
    ctx.lineTo(x + 20, y + 20);
    ctx.closePath();
    ctx.fill();
}

// createStar( 200, 200)

let stars = []

function randomCoordinates() {
    const randomX = Math.round((canvas.width - 50) * Math.random());
    const randomY = Math.round(30 + (canvas.height - 80) * Math.random());
    for (let i = 0; i < stars.length; i++) {
        if (
            randomX > stars[i].x - 50 && randomX < stars[i].x + 50
            && randomY > stars[i].y - 110 && randomY < stars[i].y + 80
        ) {
            return randomCoordinates();
        }
    }

    return {
        randomX,
        randomY
    };
}

setInterval(function () {
    let { randomX, randomY } = randomCoordinates();
    stars.push({
        x: randomX,
        y: randomY
    });
   createStar(randomX, randomY);
}
