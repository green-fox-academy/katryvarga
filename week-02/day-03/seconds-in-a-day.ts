// 'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let hoursInSeconds: number = currentHours * 60 * 60;
let minutesInSeconds: number = currentMinutes * 60;
let everyMinutes: number = hoursInSeconds + minutesInSeconds + currentSeconds;

let wholeDay: number = 24 * 3600;

let totalRemainingSecond: number = wholeDay - everyMinutes;

let remainingHours: number = Math.floor(totalRemainingSecond / 3600);
let remainingMinutes: number = Math.floor((totalRemainingSecond % 3600) / 60);
let remainingSecond: number = (totalRemainingSecond % 3600) % 60;

console.log(remainingHours);
console.log(remainingMinutes);
console.log(remainingSecond);
