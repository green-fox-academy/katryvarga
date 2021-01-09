// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function divide(inputNumber1: number) {
  if (inputNumber1 / 10 === 0) {
    console.log('Cannot divide by zero!');
  } else {
    let result = inputNumber1 / 10;
    console.log(result);
  }
}

divide(0);
