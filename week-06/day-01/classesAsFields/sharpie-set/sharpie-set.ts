// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from "./sharpie";

class SharpieSet {
  sharpie: Sharpie[] = [];

  constructor(...sharpie: Sharpie[]) {
    this.sharpie.push(...sharpie);
  }

  countUsable(): void {
    let usableSharpies: number = 0;
    for (let i: number = 0; i < this.sharpie.length; i++) {
      if (this.sharpie[i].inkAmount !== 0) {
        usableSharpies++;
      }
    }
    console.log('U have ' + usableSharpies + ' sharpies left');
  }

  removeTrash(): void {
    for (let i: number = 0; i < this.sharpie.length; i++) {
      if (this.sharpie[i].inkAmount === 0) {
        this.sharpie.splice(i, 1);
      }
    }
  }
}

let blue = new Sharpie("blue", 20);
let green = new Sharpie("green", 20);
let pink = new Sharpie("pink", 20);
let yellow = new Sharpie("yellow", 20);
let black = new Sharpie("black", 20);

let newSetOfSharpie = new SharpieSet(blue, green, pink, yellow, black);

blue.use();
blue.use();
blue.use();
blue.use();
blue.use();
black.use();

console.log(newSetOfSharpie);
newSetOfSharpie.countUsable();
newSetOfSharpie.removeTrash();
console.log(newSetOfSharpie);
