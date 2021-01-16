// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(selectedNumber: number) {
  let factorial: number = 1;
  for (let i: number = 1; i <= selectedNumber; i++) {
    factorial *= i;
  }
  console.log(factorial);
}

calculateFactorial(5);
