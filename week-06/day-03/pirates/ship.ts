import { Pirate } from './pirate';

class Ship {
  crew: Pirate[];
  captain: Pirate;

  constructor() {
    this.crew = [];
    this.fillShip();
  }

  fillShip(): void {
    for (let i: number = 0; i < Math.round(Math.random() * 20 - 1); i++) {
      this.crew.push(new Pirate());
    }
    this.captain = new Pirate();
  }
}

let ship1 = new Ship();

ship1.fillShip;
console.log(ship1);

let ship2 = new Ship();

ship2.fillShip;
console.log(ship2);
