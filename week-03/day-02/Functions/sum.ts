// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(selectedNumber: number) {
  let sum = 0;
  for (let i: number = 1; i <= selectedNumber; i++) {
    sum += i;
  }
  console.log(sum);
}

sum(22);
