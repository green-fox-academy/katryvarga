// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from "./animal";

class Farm {
  animals: Animal[] = [];
  slots: number;

  constructor(slots?: number) {
    this.slots = 3;
    this.animals = [];
  }

  breed(animal: Animal): void {
    if (this.slots > 0) {
      this.slots--;
      this.animals.push(animal);
    } else {
      console.log("There is no more place for a new animal");
    }
  }

  slaughter(): void {
    let index: number = 0;
    let leastHungry: Animal = this.animals[index];
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[index].hunger < this.animals[i].hunger) {
        index = i;
      }
    }
    this.animals.splice(index, 1);
    this.slots--;
  }
}

let farm1 = new Farm(3);

let dog = new Animal('dog');
let cat = new Animal('cat');
let bunny = new Animal('bunny');

farm1.breed(dog);
farm1.breed(cat);
farm1.breed(bunny);

console.log(farm1);

cat.play
cat.play

farm1.slaughter;
console.log(farm1);