// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export class Animal {
  species: string; 
  hunger: number = 50;
  thirst: number = 50;

  constructor(species: string) {
    this.species = species;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}

let dog = new Animal('dog');
let cat = new Animal('cat');
let bunny = new Animal('bunny');

dog.play();
cat.drink();
bunny.eat();

// console.log(dog);
// console.log(cat);
// console.log(bunny);
