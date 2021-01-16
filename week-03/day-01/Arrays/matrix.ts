// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//
// - Print this two dimensional list to the output

let size: number = 4;
let matrix: number[][] = [];

for (let i = 0; i < size; i++) {
  let insideMatrix = [];
  for (let j = 0; j < size; j++) {
    if (i === j) {
      insideMatrix.push(1);
    } else {
      insideMatrix.push(0);
    }
  }
  matrix.push(insideMatrix);
  console.log(matrix[i]);
}

//draw a matrix function

function drawAMatrix(matrixSize: number, a: number, b: number) {
  let matrix: number[][] = [];
  for (let i = 0; i < matrixSize; i++) {
    let insideMatrix = [];
    for (let j = 0; j < matrixSize; j++) {
      if (i === j) {
        insideMatrix.push(a);
      } else {
        insideMatrix.push(b);
      }
    }
    matrix.push(insideMatrix);
    console.log(matrix[i]);
  }
}

drawAMatrix(5, 0, 8);
