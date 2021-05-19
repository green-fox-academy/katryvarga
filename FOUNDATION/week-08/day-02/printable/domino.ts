import { Printable } from './printable';

class Domino implements Printable {
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  printAllFields(): void {
    console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`);
  }
}

let dominoes: Domino[] = [];
let domino = new Domino(3, 2);
dominoes.push(domino);

for (let domino of dominoes) {
  domino.printAllFields();
}
