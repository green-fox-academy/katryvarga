// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

// let fileContent = "Katry-Varga Vanda";
// fs.writeFileSync("my-file.txt", fileContent);

function writeSingleLine(text: string) {
  try {
    fs.writeFileSync(`my-file.txt`, text);
  } catch {
    console.log(`Unable to write file: my-file.txt`);
  }
}

writeSingleLine('Katry-Varga Vanda');
