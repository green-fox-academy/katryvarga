// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function linesCounter(filename: string) {
  const txt = fs.readFileSync(filename, 'utf-8');
  return txt.split(/\r\n|\r|\n/).length;
}

try {
  linesCounter('my-file.txt');
  console.log(linesCounter('my-file.txt'));
} catch (err) {
  console.log(0);
}
