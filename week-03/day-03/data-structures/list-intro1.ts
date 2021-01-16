let usersName: string[] = ["Nimród", "Botond", "Nóra"];

// add new name

usersName.push("William");
usersName[4] = "John";
usersName[usersName.length] = "Amanda";

// print
console.log(usersName);
console.log(usersName.length);
console.log(usersName[2]);

// iterate the list

for (let i: number = 0; i < usersName.length; i++) {
  console.log(usersName[i]);
}

// iterate with numbers

for (let i: number = 0; i < usersName.length; i++) {
  console.log(i + 1 + ". " + usersName[i]);
}

//remove from list

let id: number = 4;
let removedName = usersName.splice(id, 1);
console.log(usersName);

for (let i: number = 0; i < usersName.length; i++) {
  if (usersName[i] === "John") {
    usersName.splice(i, 1);
  }
}

// iterate in reverse order

usersName.reverse();
console.log(usersName);

// remove all elements

for (let i: number = 0; i < usersName.length; i++) {
  if (usersName[i] === "Nimród") {
    usersName.splice(i, 6);
  }
}
