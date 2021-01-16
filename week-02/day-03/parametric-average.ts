// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 9;
let sum: number = 0;
let average: number = 0;

for (let index: number = 1; index <= input; index++) {
  sum = sum + index;
}
average = sum / input;

console.log("Sum: " + sum + ", Average: " + average);
