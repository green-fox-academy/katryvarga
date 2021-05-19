// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

let nameToGgreet: string = "Green Fox";
let welcome: string = "Greetings, dear";

function greet(welcome: string, nameToGgreet: string) {
  console.log(welcome, nameToGgreet);
}

greet(welcome, nameToGgreet);
