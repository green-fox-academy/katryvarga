// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require("fs");

function copyContent(fileName1: string, fileName2: string) {
  try {
    let copyText = fs.readFileSync(fileName1, "utf8");
    fs.writeFileSync(fileName2, copyText);
    return true;
  } catch (err){
    return false;
  }
}

console.log(copyContent("my-file.txt", "my-newFile.txt"));
